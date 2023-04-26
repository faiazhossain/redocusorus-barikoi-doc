---
sidebar_label: "Display-basic-map"
sidebar_position: 2
---

# Display basic map

# Overview

Bkoi GL JS provides a JavaScript library to render interactive maps that display raster or vector tiles, markers, static and dynamic graphic elements for your mapping and visualization needs. It is part of the Bkoi GL ecosystem.

<iframe src="https://bkoi-gl-example-display-map.surge.sh/" width="100%" height="280px" frameborder="0" allowfullscreen ></iframe>

1. Connect the CDN for Bkoi GL JS

```html
// For CSS
<link
  rel="stylesheet"
  href="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.css"
/>
// For JS
<script src="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.js"></script>
```

2. Initialize a map in an HTML element with Bkoi GL JS.  
   Add `` tag into your page. The map will be loaded in the tag.

```html
<div id="map"></div>
```

3. The tag must have non-zero height.

```css
#map {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
```

4. Finally, load the map

```js
bkoigl.accessToken = ""; // required
new bkoigl.Map({
  container: "map",
  center: [90.3938010872331, 23.821600277500405],
  zoom: 12,
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
    <title>Display Map</title>
  </head>
  <body>
    <div id="map"></div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 12,
      });
    </script>
  </body>
</html>
```
