---
sidebar_label: "Measure Distance"
sidebar_position: 12
---

<iframe src="https://bkoi-gl-example-measure-distance.surge.sh/" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Add <span style={{color:"#e83e8c"}}>turf.js</span> for <span style={{color:"#e83e8c"}}>distance</span> measurement

```html
<script src="https://unpkg.com/@turf/turf@6.3.0/turf.min.js"></script>
```

Add <span style={{color:"#e83e8c"}}>distance</span> container <span style={{color:"#e83e8c"}}>styles</span>

```css
.distance-container {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
}

.distance-container > * {
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 11px;
  line-height: 18px;
  display: block;
  margin: 0;
  padding: 5px 10px;
  border-radius: 3px;
}
```

Add <span style={{color:"#e83e8c"}}>distance</span> container <span style={{color:"#e83e8c"}}>div</span>

```html
<div id="distance" class="distance-container"></div>
```

Add <span style={{color:"#e83e8c"}}>Map</span>

```js
bkoigl.accessToken = "<Barikoi API Key>"; // required
const map = new bkoigl.Map({
  container: "map",
  center: [90.3938010872331, 23.821600277500405],
  zoom: 12,
});
```

Add <span style={{color:"#e83e8c"}}>GeoJSON</span> Features to hold feature data

```js
const distanceContainer = document.getElementById("distance");

// GeoJSON object to hold our measurement features
const geojson = {
  type: "FeatureCollection",
  features: [],
};

// Used to draw a line between points
const linestring = {
  type: "Feature",
  geometry: {
    type: "LineString",
    coordinates: [],
  },
};
```

Add sources and layers to <span style={{color:"#e83e8c"}}>map</span> and a <span style={{color:"#e83e8c"}}>`click`</span> event to draw lines between <span style={{color:"#e83e8c"}}>clicked</span> points and measure distance

```js
map.on("load", () => {
  map.addSource("geojson", {
    type: "geojson",
    data: geojson,
  });

  // Add styles to the map
  map.addLayer({
    id: "measure-points",
    type: "circle",
    source: "geojson",
    paint: {
      "circle-radius": 5,
      "circle-color": "#000",
    },
    filter: ["in", "$type", "Point"],
  });

  map.addLayer({
    id: "measure-lines",
    type: "line",
    source: "geojson",
    layout: {
      "line-cap": "round",
      "line-join": "round",
    },
    paint: {
      "line-color": "#000",
      "line-width": 2.5,
    },
    filter: ["in", "$type", "LineString"],
  });

  map.on("click", (e) => {
    const features = map.queryRenderedFeatures(e.point, {
      layers: ["measure-points"],
    });

    // Remove the linestring from the group
    // So we can redraw it based on the points collection
    if (geojson.features.length > 1) {
      geojson.features.pop();
    }

    // Clear the Distance container to populate it with a new value
    distanceContainer.innerHTML = "";

    // If a feature was clicked, remove it from the map
    if (features.length) {
      const id = features[0].properties.id;
      geojson.features = geojson.features.filter(
        (point) => point.properties.id !== id
      );
    } else {
      const point = {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [e.lngLat.lng, e.lngLat.lat],
        },
        properties: {
          id: String(new Date().getTime()),
        },
      };

      geojson.features.push(point);
    }

    if (geojson.features.length > 1) {
      linestring.geometry.coordinates = geojson.features.map(
        (point) => point.geometry.coordinates
      );
      geojson.features.push(linestring);

      // Populate the distanceContainer with total distance
      const value = document.createElement("pre");
      value.textContent =
        "Total distance: " + turf.length(linestring).toLocaleString() + "km";
      distanceContainer.appendChild(value);
    }

    map.getSource("geojson").setData(geojson);
  });
});
```

Add <span style={{color:"#e83e8c"}}>`mousemove`</span> event to style <span style={{color:"#e83e8c"}}>cursor</span> on points and map

```js
map.on("mousemove", (e) => {
  const features = map.queryRenderedFeatures(e.point, {
    layers: ["measure-points"],
  });

  // UI indicator for clicking/hovering a point on the map
  map.getCanvas().style.cursor = features.length ? "pointer" : "crosshair";
});
```

# Full Source Code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.css"
    />
    <script src="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.js"></script>
    <script src="https://unpkg.com/@turf/turf@6.3.0/turf.min.js"></script>
    <style>
      body,
      #map {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }

      .distance-container {
        position: absolute;
        top: 10px;
        left: 10px;
        z-index: 1;
      }

      .distance-container > * {
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-size: 11px;
        line-height: 18px;
        display: block;
        margin: 0;
        padding: 5px 10px;
        border-radius: 3px;
      }
    </style>
    <title>Measure Distance</title>
  </head>
  <body>
    <div id="map"></div>
    <div id="distance" class="distance-container"></div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 12,
      });

      const distanceContainer = document.getElementById("distance");

      const geojson = {
        type: "FeatureCollection",
        features: [],
      };

      const linestring = {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [],
        },
      };

      map.on("load", () => {
        map.addSource("geojson", {
          type: "geojson",
          data: geojson,
        });

        map.addLayer({
          id: "measure-points",
          type: "circle",
          source: "geojson",
          paint: {
            "circle-radius": 5,
            "circle-color": "#000",
          },
          filter: ["in", "$type", "Point"],
        });

        map.addLayer({
          id: "measure-lines",
          type: "line",
          source: "geojson",
          layout: {
            "line-cap": "round",
            "line-join": "round",
          },
          paint: {
            "line-color": "#000",
            "line-width": 2.5,
          },
          filter: ["in", "$type", "LineString"],
        });

        map.on("click", (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ["measure-points"],
          });

          if (geojson.features.length > 1) {
            geojson.features.pop();
          }

          distanceContainer.innerHTML = "";

          if (features.length) {
            const id = features[0].properties.id;
            geojson.features = geojson.features.filter(
              (point) => point.properties.id !== id
            );
          } else {
            const point = {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [e.lngLat.lng, e.lngLat.lat],
              },
              properties: {
                id: String(new Date().getTime()),
              },
            };

            geojson.features.push(point);
          }

          if (geojson.features.length > 1) {
            linestring.geometry.coordinates = geojson.features.map(
              (point) => point.geometry.coordinates
            );
            geojson.features.push(linestring);

            const value = document.createElement("pre");
            value.textContent =
              "Total distance: " +
              turf.length(linestring).toLocaleString() +
              "km";
            distanceContainer.appendChild(value);
          }

          map.getSource("geojson").setData(geojson);
        });
      });

      map.on("mousemove", (e) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ["measure-points"],
        });

        map.getCanvas().style.cursor = features.length
          ? "pointer"
          : "crosshair";
      });
    </script>
  </body>
</html>
```
