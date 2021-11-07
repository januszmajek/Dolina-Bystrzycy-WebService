const test = {
  type: "FeatureCollection",
  name: "test2",
  crs: { type: "name", properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" } },
  features: [
    {
      type: "Feature",
      properties: { testing: "test" },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [-118.513438982537011, 74.293662175603259],
              [-110.732397353150745, -6.311149817316507],
              [97.799518314400416, -13.964644303807402],
              [81.848382974158625, 70.547587328023141],
              [-118.513438982537011, 74.293662175603259],
            ],
          ],
        ],
      },
    },
  ],
};
