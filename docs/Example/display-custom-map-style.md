---
sidebar_label: "Display custom map style"
sidebar_position: 3
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Display custom map style

Bkoi GL JS provides a JavaScript library to render interactive maps that display raster or vector tiles, markers, static and dynamic graphic elements for your mapping and visualization needs. It is part of the Bkoi GL ecosystem.

<iframe
src="https://barikoi.com:8080/custom-map-styles" width="100%" height="280px" frameborder="0" style={{border: "4px solid gray"}} allowfullscreen></iframe>
<br/>

Add a map style url to the style prop.

```js
bkoigl.accessToken = "<Barikoi API Key>"; // required
new bkoigl.Map({
  container: "map",
  center: [90.3938010872331, 23.821600277500405],
  zoom: 12,
  style: "http://map.barikoi.com/styles/barikoi-dark/style.json", // Map Style Url. Need accessToken for mapbox URL.
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
    <title>Custom Map</title>
  </head>
  <body>
    <div id="map"></div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 12,
        style: "https://map.barikoi.com/styles/barikoi-dark/style.json", // Map Style Url. Need accessToken for mapbox URL.
      });
    </script>
  </body>
</html>
```
