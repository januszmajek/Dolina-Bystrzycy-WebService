//map initialization
const map = L.map("map").setView([51.019647, 16.776968], 12);
// add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({ imperial: false, metric: true }).addTo(map);

//adding GEOJSON
L.geoJSON(points).addTo(map);
L.geoJSON(lines).addTo(map);
L.geoJSON(test).addTo(map);

/* returns true if marker's category is "vievpoint", else returns false and writes results to console*/
console.log(
  markerPoints.features.map((prp) => {
    return prp.properties.category === "viewpoint";
  })
);
