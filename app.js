//map initialization
const map = L.map("map", {
  center: [51.03085, 16.778501],
  zoom: 11,
  minZoom: 10,
  maxZoom: 18,
});

// OpenStreetMap layer
const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

// MapBox Basic layer
const mapBox = L.tileLayer(
  "https://api.mapbox.com/styles/v1/jmajek/ckvm61hjo1in914mwf45thlt7/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoiam1hamVrIiwiYSI6ImNrdm01cWc4MTBlODkycXFmdzk4MzdrenQifQ.rh-ADjtPd9DIGdTAwf124A",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1,
  }
);
mapBox.addTo(map);

// show the scale bar on the lower left corner of the map
L.control.scale({ imperial: false, metric: true }).addTo(map);

// function define marker icon properities, takes icon image by url and assign it to chosen data
function markerPoint(layerData, urlIcon) {
  const customIcon = new L.Icon({
    iconUrl: urlIcon,
    iconSize: [28, 46],
    iconAnchor: [13, 40],
    popupAnchor: [1, -24],
  });
  return L.geoJSON(layerData, {
    pointToLayer: function (geoJsonPoint, latlng) {
      return L.marker(latlng, { icon: customIcon });
    },
  });
}

//adding GEOJSON layers
const pInfo = markerPoint(pointsInfo, "style/markers/info_marker.svg");
const pMonument = markerPoint(
  pointsMonument,
  "style/markers/landmark_marker.svg"
);
const pView = markerPoint(pointsView, "style/markers/camera_marker.svg");
const pBorder = L.geoJSON(parkBorder, {
  style: {
    color: "#118600",
    weight: 3,
  },
});
const pBeaver = L.geoJSON(beaverTrail);
const pBielik = L.geoJSON(bieliksTrail);
pInfo.addTo(map);
pMonument.addTo(map);
pView.addTo(map);
pBorder.addTo(map);

// map background layers used in layer controller
const mapLayers = {
  "MapBox Basic": mapBox,
  OpenStreetMap: osm,
};

// object witch marker points and lines used in layer controller
const mapMarkers = {
  "Granica parku": pBorder,
  "Tablice Informacyjne": pInfo,
  Zabytki: pMonument,
  "Punkty widokowe": pView,
  "Szlak Bobra": pBeaver,
  "Szlak Bielika": pBielik,
};

// add layer controller to the map
L.control.layers(mapLayers, mapMarkers).addTo(map);

// show zoom controller on higher right corner of the map
map.zoomControl.setPosition("topright");

const infoNames = pointsInfo.features.map(function (prp) {
  return prp.properties.name;
});
const infoPlace = pointsInfo.features.map(function (prp) {
  return prp.properties.place;
});
const infoTags = pointsInfo.features.map(function (prp) {
  return prp.properties.tags;
});
const infoCategory = pointsInfo.features.map(function (prp) {
  return prp.properties.category;
});
const infoPhoto = pointsInfo.features.map(function (prp) {
  return prp.properties.mainPhoto;
});
const infoDescription = pointsInfo.features.map(function (prp) {
  return prp.properties.description;
});
const infoMedia = pointsInfo.features.map(function (prp) {
  return prp.properties.media;
});

const monumentNames = pointsMonument.features.map(function (prp) {
  return prp.properties.name;
});
const monumentPlace = pointsMonument.features.map(function (prp) {
  return prp.properties.place;
});
const monumentTags = pointsMonument.features.map(function (prp) {
  return prp.properties.tags;
});
const monumentCategory = pointsMonument.features.map(function (prp) {
  return prp.properties.category;
});
const monumentPhoto = pointsMonument.features.map(function (prp) {
  return prp.properties.mainPhoto;
});
const monumentDescription = pointsMonument.features.map(function (prp) {
  return prp.properties.description;
});
const monumentMedia = pointsMonument.features.map(function (prp) {
  return prp.properties.media;
});

const viewNames = pointsView.features.map(function (prp) {
  return prp.properties.name;
});
const viewPlace = pointsView.features.map(function (prp) {
  return prp.properties.place;
});
const viewTags = pointsView.features.map(function (prp) {
  return prp.properties.tags;
});
const viewCategory = pointsView.features.map(function (prp) {
  return prp.properties.category;
});
const viewPhoto = pointsView.features.map(function (prp) {
  return prp.properties.mainPhoto;
});
const viewDescription = pointsView.features.map(function (prp) {
  return prp.properties.description;
});
const viewMedia = pointsView.features.map(function (prp) {
  return prp.properties.media;
});
// names and coordinates all connected in one array
let mMonument = Object.keys(pMonument._layers).map(function (keys) {
  return [
    pMonument._layers[keys].feature.properties.name,
    pMonument._layers[keys]._latlng,
  ];
});
let mView = Object.keys(pView._layers).map(function (keys) {
  return [
    pView._layers[keys].feature.properties.name,
    pView._layers[keys]._latlng,
  ];
});
let mInfo = Object.keys(pInfo._layers).map(function (keys) {
  return [
    pInfo._layers[keys].feature.properties.name,
    pInfo._layers[keys]._latlng,
  ];
});
const allMarkers = mMonument.concat(mView, mInfo);
const allMarkersNames = allMarkers.map(function (prp) {
  return prp[0];
});
const allNamesDashes = allMarkersNames.map(function (e) {
  return e.replace(/ /g, "-");
});
const allMarkersCoords = allMarkers.map(function (prp) {
  return prp[1];
});
// objects from pInfo, pMonument, pView all connected to one array
const idMonument = Object.entries(pMonument._layers).map(function (e) {
  return e;
});
const objMonument = idMonument.map(function (f) {
  return f[1];
});
const idView = Object.entries(pView._layers).map(function (e) {
  return e;
});
const objView = idView.map(function (f) {
  return f[1];
});
const idInfo = Object.entries(pInfo._layers).map(function (e) {
  return e;
});
const objInfo = idInfo.map(function (f) {
  return f[1];
});
const rlyMarkers = objMonument.concat(objView, objInfo);
//not finished
function addElement(dataName, dataPlace, dataTags, dataPhoto) {
  for (let i = 0; i < dataName.length; i++) {
    //create elements
    const divMenuItem = document.createElement("div");
    const divItemLeft = document.createElement("div");
    const pItemName = document.createElement("p");
    const pItemAdress = document.createElement("p");
    const pItemTags = document.createElement("p");
    const btn = document.createElement("button");
    const imgMain = document.createElement("img");
    // assign class to created elements
    divMenuItem.classList.add("menu-item");
    divMenuItem.id = dataName[i];
    divItemLeft.classList.add("item-left");
    pItemName.classList.add("item-name");
    pItemAdress.classList.add("item-adress");
    pItemTags.classList.add("item-tags");
    btn.classList.add("btn");
    btn.classList.add(dataName[i].replace(/ /g, "-"));
    imgMain.classList.add("main-img");
    //add created elemets to choosen DOM elements
    document.getElementById("sideNav").appendChild(divMenuItem);
    document
      .getElementsByClassName("menu-item")
      [document.getElementsByClassName("menu-item").length - 1].appendChild(
        divItemLeft
      );
    document
      .getElementsByClassName("item-left")
      [document.getElementsByClassName("menu-item").length - 1].appendChild(
        pItemName
      );
    document
      .getElementsByClassName("item-left")
      [document.getElementsByClassName("menu-item").length - 1].appendChild(
        pItemAdress
      );
    document
      .getElementsByClassName("item-left")
      [document.getElementsByClassName("menu-item").length - 1].appendChild(
        pItemTags
      );
    document
      .getElementsByClassName("item-left")
      [document.getElementsByClassName("menu-item").length - 1].appendChild(
        btn
      );
    document
      .getElementsByClassName("menu-item")
      [document.getElementsByClassName("menu-item").length - 1].appendChild(
        imgMain
      );
    // add content to created elements
    pItemName.textContent = dataName[i];
    pItemAdress.textContent = dataPlace[i];
    pItemTags.textContent = dataTags[i];
    btn.textContent = "Więcej";
    document.getElementsByClassName("main-img")[
      document.getElementsByClassName("menu-item").length - 1
    ].src = dataPhoto[i];
  }
}
// dopisac w tagach miejsce wypoczynkowe w viewpointach
addElement(monumentNames, monumentPlace, monumentTags, monumentPhoto);
addElement(viewNames, viewPlace, viewTags, viewPhoto);
addElement(infoNames, infoPlace, infoTags, infoPhoto);

function locationDescription(
  dataName,
  dataPlace,
  dataCategory,
  dataDescription,
  dataMedia
) {
  for (let i = 0; i < dataName.length; i++) {
    // create elements
    const divSidebarMenu = document.getElementById("sideProperity");
    const divSideProp = document.createElement("div");
    divSideProp.className = "sideProp";
    divSideProp.classList.add(dataName[i].replace(/ /g, "-"));
    divSideProp.id = "sideProp" + i;
    const divSidePropTop = document.createElement("div");
    divSidePropTop.className = "sidePropTop";
    divSidePropTop.id = "sidePropTop" + i;
    const h2ItemName = document.createElement("h2");
    h2ItemName.className = "itemName";
    h2ItemName.id = "itemName" + i;
    const aBtnClose = document.createElement("a");
    aBtnClose.className = "closebtn";
    const divSidePropFirstInfo = document.createElement("div");
    divSidePropFirstInfo.className = "sidePropFirstInfo";
    divSidePropFirstInfo.id = "sidePropFirstInfo" + i;
    const divLocation = document.createElement("div");
    divLocation.className = "location";
    divLocation.id = "location" + i;
    const divLocIcon = document.createElement("div");
    divLocIcon.className = "locIcon";
    divLocIcon.id = "locIcon" + i;
    const imgLoc = document.createElement("img");
    imgLoc.className = "imgLoc";
    imgLoc.id = "imgLoc" + i;
    const h3LocName = document.createElement("h3");
    h3LocName.id = "place" + i;
    const divLocType = document.createElement("div");
    divLocType.className = "locType";
    divLocType.id = "locType" + i;
    const divTypeIcon = document.createElement("div");
    divTypeIcon.className = "typeIcon";
    divTypeIcon.id = "typeIcon" + i;
    const imgType = document.createElement("img");
    imgType.className = "imgType";
    imgType.id = "imgType" + i;
    const h3Category = document.createElement("h3");
    h3Category.className = "category";
    h3Category.id = "category" + i;
    const divSidePropSecondInfo = document.createElement("div");
    divSidePropSecondInfo.className = "sidePropSecondInfo";
    divSidePropSecondInfo.id = "sidePropSecondInfo" + i;
    const pDescription = document.createElement("p");
    pDescription.className = "description";
    pDescription.id = "description" + i;
    const divPhotoGallery = document.createElement("div");
    divPhotoGallery.className = "photoGallery";
    divPhotoGallery.id = "photoGallery" + i;
    // put elements in correct place
    divSidebarMenu.appendChild(divSideProp);
    divSidebarMenu.appendChild(divSideProp);
    divSideProp.appendChild(divSidePropTop);
    divSidePropTop.appendChild(h2ItemName);
    divSidePropTop.appendChild(aBtnClose);
    divSideProp.appendChild(divSidePropFirstInfo);
    divSidePropFirstInfo.appendChild(divLocation);
    divLocation.appendChild(divLocIcon);
    divLocIcon.appendChild(imgLoc);
    divLocation.appendChild(h3LocName);
    divSidePropFirstInfo.appendChild(divLocType);
    divLocType.appendChild(divTypeIcon);
    divTypeIcon.appendChild(imgType);
    divLocType.appendChild(h3Category);
    divSideProp.appendChild(divSidePropSecondInfo);
    divSidePropSecondInfo.appendChild(pDescription);
    divSideProp.appendChild(divPhotoGallery);
    for (let j = 0; j < dataMedia[i].length; j++) {
      const divPic = document.createElement("div");
      divPic.className = "pic";
      const imgMedia = document.createElement("img");
      // src to photo
      imgMedia.src = dataMedia[i][j];
      divPic.appendChild(imgMedia);
      divPhotoGallery.appendChild(divPic);
    }
    // add content to elements
    h2ItemName.textContent = dataName[i];
    // converted &time; text to unicode JS \u{D7}
    aBtnClose.textContent = "\u{D7}";
    aBtnClose.href = "javascript:void(0)";
    imgLoc.src = "style/icons/bxs-map.svg";
    h3LocName.textContent = dataPlace[i];
    switch (dataCategory[i]) {
      case "Tablica informacyjna":
        imgType.src = "style/icons/bx-info.svg";
        break;
      case "Obiekt historyczny":
        imgType.src = "style/icons/bxs-landmark.svg";
        break;
      case "Punkt widokowy":
        imgType.src = "style/icons/bxs-camera.svg";
    }
    h3Category.textContent = dataCategory[i];
    pDescription.textContent = dataDescription[i];
  }
}
locationDescription(
  monumentNames,
  monumentPlace,
  monumentCategory,
  monumentDescription,
  monumentMedia
);
locationDescription(
  viewNames,
  viewPlace,
  viewCategory,
  viewDescription,
  viewMedia
);
locationDescription(
  infoNames,
  infoPlace,
  infoCategory,
  infoDescription,
  infoMedia
);

//ZOOM
//zoom speed
function zoomSpeed() {
  let speed = 0;
  if (map.getZoom() > 16) {
    speed = 0.1;
  } else {
    speed = 0.8;
  }
  return speed;
}
//set view to clicked marker
pInfo.on("click", function (e) {
  // e is an event object (MouseEvent in this case)
  // alert(e.latlng);
  map.setView(e.latlng);
});
pMonument.on("click", function (e) {
  map.setView(e.latlng);
});
pView.on("click", function (e) {
  map.setView(e.latlng);
});

//when one of "menu-item" class divs is clicked, the map zooms to that points marker on the map and displays a popup
Array.from(document.getElementsByClassName("menu-item")).map(function (
  element
) {
  element.addEventListener("click", function () {
    for (let i = 0; i < allMarkersNames.length; i++) {
      if (allMarkersNames[i].includes(element.id)) {
        map.flyTo(allMarkersCoords[i], 18, {
          animate: true,
          duration: zoomSpeed(),
        });
        rlyMarkers[i].bindPopup(allMarkersNames[i]).openPopup();
      }
    }
  });
});

// location name popup after marker click
function bindMarkerPopup(markerName, markerType) {
  for (let i = 0; i < markerName.length; i++) {
    Object.values(markerType._layers)[i].bindPopup(markerName[i][0]);
  }
}
bindMarkerPopup(mMonument, pMonument);
bindMarkerPopup(mView, pView);
bindMarkerPopup(mInfo, pInfo);

// add search filter
function listFilter() {
  const input = document.getElementById("search");
  const filter = input.value.toUpperCase();
  const sidebarItems = document.getElementsByClassName("menu-item");

  Array.from(sidebarItems).forEach(function (e) {
    const title = e.firstElementChild.firstElementChild.textContent;
    if (title.toUpperCase().indexOf(filter) > -1) {
      e.style.display = "flex";
    } else {
      e.style.display = "none";
    }
  });
}
//more details about object when "more" button is clicked

// navbar buttons functionality
function abtMap() {
  document.getElementById("abtMap").style.width = "400px";
}
function contact() {
  document.getElementById("contact").style.width = "400px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.querySelector(".sideProp").style.width = "0";
}
function closeAbtMap() {
  document.getElementById("abtMap").style.width = "0";
}
function closeContact() {
  document.getElementById("contact").style.width = "0";
}

// enlarge img from gallery on click
// function enlImg() {
//   document.createElement("div");
// }

// x[0].addEventListener("click", testFunction);

const leftButtons = Array.from(
  document.getElementById("sideNav").querySelectorAll(".btn")
).map(function (e) {
  return e;
});
const sideProperities = Array.from(document.querySelectorAll(".sideProp")).map(
  function (e) {
    return e;
  }
);
function oneArrCreator(a, b, arr) {
  for (let i = 0; i < a.length; i++) {
    arr.push([a[i], b[i]]);
  }
  return arr;
}
let arrMenager = oneArrCreator(leftButtons, sideProperities, []);

arrMenager.forEach(function (e) {
  e[0].addEventListener("click", function () {
    e[1].style.width = "600px";
  });
});

const closeButtons = Array.from(
  document.querySelector("#sideProperity").querySelectorAll(".closebtn")
);
const clsBtnMenager = oneArrCreator(closeButtons, sideProperities, []);
clsBtnMenager.forEach(function (e) {
  e[0].addEventListener("click", function () {
    e[1].style.width = "0px";
  });
});
