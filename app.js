//map initialization
const map = L.map("map").setView([51.019647, 16.776968], 12);
// add the OpenStreetMap tiles layer
const osm = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
});
osm.addTo(map);

// add OSM hike bike layer
const hikeBike = L.tileLayer(
  "https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
);

// show the scale bar on the lower left corner
L.control.scale({ imperial: false, metric: true }).addTo(map);

//adding GEOJSON
L.geoJSON(points).addTo(map);
const parkBorder = L.geoJSON(lines);
parkBorder.addTo(map);
/* returns true if marker's category is "vievpoint", else returns false and writes results to console*/
// console.log(
//   points.features.map((prp) => {
//     return prp.properties.category === "viewpoint";
//   })
// );

// layer controller

const mapLayers = {
  "Basic OpenStreetMap": osm,
  "Hike and Bike OpenStreetMap": hikeBike,
};
const catViewpoint = points.features.map((prp) => {
  return prp.properties.category === "viewpoint";
});

const catMonument = points.features.map((prp) => {
  return prp.properties.category === "monument";
});

const catInfo = points.features.map((prp) => {
  return prp.properties.category === "info";
});

const markerPoints = {
  "Punkty widokowe": catViewpoint,
  "Tablice informacyjne": catInfo,
};

const borderLine = {
  "Granica Parku": parkBorder,
};

L.control.layers(mapLayers, borderLine).addTo(map);
