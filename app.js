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
const infoPhoto = pointsInfo.features.map(function (prp) {
  return prp.properties.mainPhoto;
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
const monumentPhoto = pointsMonument.features.map(function (prp) {
  return prp.properties.mainPhoto;
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
const viewPhoto = pointsView.features.map(function (prp) {
  return prp.properties.mainPhoto;
});

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
    imgMain.classList.add("main-img");
    //add created elemets to choosen DOM elements
    document.getElementsByClassName("sidebar-menu")[0].appendChild(divMenuItem);
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
    btn.textContent = "Zdjęcia";
    document.getElementsByClassName("main-img")[
      document.getElementsByClassName("menu-item").length - 1
    ].src = dataPhoto[i];
  }
}
// dopisac w tagach miejsce wypoczynkowe w viewpointach
addElement(monumentNames, monumentPlace, monumentTags, monumentPhoto);
addElement(viewNames, viewPlace, viewTags, viewPhoto);
addElement(infoNames, infoPlace, infoTags, infoPhoto);

//zoom to marker
function zoomSpeed() {
  let speed = 0;
  if (map.getZoom() > 16) {
    speed = 0.1;
  } else {
    speed = 0.8;
  }
  return speed;
}

pInfo.on("click", function (e) {
  // e is an event object (MouseEvent in this case)
  // alert(e.latlng);
  map.flyTo(e.latlng, 18, {
    aniamte: true,
    duration: zoomSpeed(),
  });
});
pMonument.on("click", function (e) {
  map.flyTo(e.latlng, 18, {
    aniamte: true,
    duration: zoomSpeed(),
  });
});
pView.on("click", function (e) {
  map.flyTo(e.latlng, 18, {
    aniamte: true,
    duration: zoomSpeed(),
  });
});

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
let allMarkersNames = allMarkers.map(function (prp) {
  return prp[0];
});
let allMarkersCoords = allMarkers.map(function (prp) {
  return prp[1];
});

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
      }
    }
  });
});
