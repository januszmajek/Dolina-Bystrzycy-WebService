//map initialization
const map = L.map("map", {
  center: [51.037081, 16.546543],
  zoom: 11,
  maxZoom: 18,
});
// add the OpenStreetMap tiles layer
const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
});

// add OSM hike bike layer
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
// show the scale bar on the lower left corner
L.control.scale({ imperial: false, metric: true }).addTo(map);

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

// layer controller
L.control.layers(mapLayers, mapMarkers).addTo(map);

/* ----------------UNUSED CODE---------------- */
/* --------------MAYBE USE LATER-------------- */

/* returns true if marker's category is "vievpoint", else returns false and writes results to console*/
// console.log(
//   points.features.map((prp) => {
//     return prp.properties.category === "viewpoint";
//   })
// );

// const catViewpoint = pointsView.features.map((prp) => {
//   return prp.properties.category === "viewpoint";
// });

// const catMonument = pointsMonument.features.map((prp) => {
//   if (prp.properties.category === "monument") {
//     return prp;
//   } else {
//     return false;
//   }
// });

// const catInfo = pointsInfo.features.map((prp) => {
//   return prp.properties.category === "info";
// });

// console.log(catMonument);
// console.log(points.features.length);

// const catMonument2 = points.features.map((prp) => {
//   for (let i = 0; i <= points.features.length; i++) {
//     if (prp.properties.category !== "monument") {
//       continue;
//     } else {
//       return prp;
//     }
//   }
// });
// console.log(catMonument2);

// // replace Leaflet default blue marker with a custom icon
// function customIcon(iconpath, latlng) {
//   let myIcon = L.icon({
//     iconUrl: iconpath,
//     iconSize: [25, 41], // size of the icon
//     iconAnchor: [12, 20], // point of the icon which will correspond to marker's location
//     //shadowAnchor: [4, 62],  //the same for the shadow
//     popupAnchor: [0, 0], // point from which the popup should open relative to the iconAnchor
//   });
//   const coordInfo = latlng.features.map((prp) => {
//     return prp.geometry.coordinates;
//   });
//   return L.marker(coordInfo, { icon: myIcon });
// }
// // create an options object that specifies which function will called on each feature
// let myLayerOptions = {
//   pointToLayer: customIcon("./style/markers/camera_marker.png", pointsView),
// };
