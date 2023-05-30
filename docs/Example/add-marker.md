---
sidebar_label: "Add Marker"
sidebar_position: 5
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Add marker

<iframe src="http://barikoi.com:8080/add-marker" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

Add Marker on Map load

```js
map.on("load", () => {
  const marker = new bkoigl.Marker({ draggable: true })
    .setLngLat([90.3938010872331, 23.821600277500405])
    .addTo(map);
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
    </style>
    <title>Add Marker To Map</title>
  </head>
  <body>
    <div id="map"></div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 12,
      });

      // Add Marker on Map Load
      map.on("load", () => {
        const marker = new bkoigl.Marker({ draggable: true })
          .setLngLat([90.3938010872331, 23.821600277500405])
          .addTo(map);
      });
    </script>
  </body>
</html>
```
