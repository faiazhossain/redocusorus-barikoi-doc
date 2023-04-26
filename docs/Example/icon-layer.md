---
sidebar_label: "Icon Layer"
sidebar_position: 14
---

# Icon Layer

<iframe src="https://bkoi-gl-example-icon-layer.surge.sh/" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Marker Element <span style={{color:"#e83e8c"}}>styles</span>

```css
.marker {
  display: block;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
}
```

Demo <span style={{color:"#e83e8c"}}>GeoJSON</span> Data

```js
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        message: "Foo",
        iconSize: [60, 60],
      },
      geometry: {
        type: "Point",
        coordinates: [90.3238010872331, 23.821600277500405],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Bar",
        iconSize: [50, 50],
      },
      geometry: {
        type: "Point",
        coordinates: [90.3938010872331, 23.521600277500405],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Baz",
        iconSize: [40, 40],
      },
      geometry: {
        type: "Point",
        coordinates: [90.2538010872331, 23.521600277500405],
      },
    },
  ],
};
```

Add <span style={{color:"#e83e8c"}}>markers</span> to the map

```js
map.on("load", () => {
  geojson.features.forEach((marker) => {
    // Create a DOM element for each marker.
    const el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage = `url(https://placekitten.com/g/${marker.properties.iconSize.join(
      "/"
    )}/)`;
    el.style.width = `${marker.properties.iconSize[0]}px`;
    el.style.height = `${marker.properties.iconSize[1]}px`;
    el.style.backgroundSize = "100%";

    // Add markers to the map.
    new bkoigl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(
        new bkoigl.Popup({ focusAfterOpen: false }).setHTML(
          `<h3>${marker.properties.message}</h3>`
        )
      )
      .addTo(map);
  });
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
      .marker {
        display: block;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        padding: 0;
      }
    </style>
    <title>Icon Layer</title>
  </head>
  <body>
    <div id="map"></div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 8,
      });

      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              message: "Foo",
              iconSize: [60, 60],
            },
            geometry: {
              type: "Point",
              coordinates: [90.3238010872331, 23.821600277500405],
            },
          },
          {
            type: "Feature",
            properties: {
              message: "Bar",
              iconSize: [50, 50],
            },
            geometry: {
              type: "Point",
              coordinates: [90.3938010872331, 23.521600277500405],
            },
          },
          {
            type: "Feature",
            properties: {
              message: "Baz",
              iconSize: [40, 40],
            },
            geometry: {
              type: "Point",
              coordinates: [90.2538010872331, 23.521600277500405],
            },
          },
        ],
      };

      map.on("load", () => {
        geojson.features.forEach((marker) => {
          // Create a DOM element for each marker.
          const el = document.createElement("div");
          el.className = "marker";
          el.style.backgroundImage = `url(https://placekitten.com/g/${marker.properties.iconSize.join(
            "/"
          )}/)`;
          el.style.width = `${marker.properties.iconSize[0]}px`;
          el.style.height = `${marker.properties.iconSize[1]}px`;
          el.style.backgroundSize = "100%";

          // Add markers to the map.
          new bkoigl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(
              new bkoigl.Popup({ focusAfterOpen: false }).setHTML(
                `<h3>${marker.properties.message}</h3>`
              )
            )
            .addTo(map);
        });
      });
    </script>
  </body>
</html>
```
