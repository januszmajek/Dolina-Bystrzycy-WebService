//map initialization
const map = L.map("map", {
  center: [51.019647, 16.776968],
  zoom: 12,
  maxZoom: 18,
});
// add the OpenStreetMap tiles layer
const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
});
osm.addTo(map);

// add OSM hike bike layer
const hikeBike = L.tileLayer(
  "https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

// show the scale bar on the lower left corner
L.control.scale({ imperial: false, metric: true }).addTo(map);

//adding GEOJSON layers
const pInfo = L.geoJSON(pointsInfo);
const pMonument = L.geoJSON(pointsMonument);
const pView = L.geoJSON(pointsView);
const pBorder = L.geoJSON(parkBorder);
pInfo.addTo(map);
pMonument.addTo(map);
pView.addTo(map);
pBorder.addTo(map);

// layer controller
const mapLayers = {
  "Basic OpenStreetMap": osm,
  "Hike and Bike OpenStreetMap": hikeBike,
};

// object witch marker points used in layer controller
const mapMarkers = {
  "Granica parku": pBorder,
  "Tablice Informacyjne": pInfo,
  Zabytki: pMonument,
  "Punkty widokowe": pView,
};

L.control.layers(mapLayers, mapMarkers).addTo(map);

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
