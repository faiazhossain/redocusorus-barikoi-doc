---
sidebar_label: "Get Mouse position"
sidebar_position: 8
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Get mouse position

<iframe src="http://barikoi.com:8080/get-mouse-position" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Add a <span style={{color:"#e83e8c"}}>Style</span> for mouse <span style={{color:"#e83e8c"}}>hover</span>

```css
/* Add Styles */
#mouse-info {
  box-sizing: border-box;
  margin: 0;
  padding: 8px;
  position: absolute;
  bottom: 24px;
  left: 8px;
  z-index: 200;
  background: gray;
}
```

Add <span style={{color:"#e83e8c"}}>mouse position</span> info section

```
<!-- Add mouse position info section. -->
<div id="mouse-info">
    <h3>Mouse Hover Position</h3>
    <div id="mouse-hover-pos"></div>

    <h3>Mouse Click Position</h3>
    <div id="mouse-click-pos"></div>
</div>
```

Add <span style={{color:"#e83e8c"}}>`mousemove`</span> event to get mouse position on <span style={{color:"#e83e8c"}}>hover</span>

```js
// Add `mousemove` event to get mouse position on hover.
map.on("mousemove", (e) => {
  document.getElementById(
    "mouse-hover-pos"
  ).innerHTML = `Location: ${e.lngLat}`;
});
```

Add <span style={{color:"#e83e8c"}}>`click`</span> event to get mouse position <span style={{color:"#e83e8c"}}>on click</span>.

```js
// Add `click` event to get mouse position on click.
map.on("click", (e) => {
  document.getElementById(
    "mouse-click-pos"
  ).innerHTML = `Location: ${e.lngLat}`;
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

      /* Add Styles */
      #mouse-info {
        box-sizing: border-box;
        margin: 0;
        padding: 8px;
        position: absolute;
        bottom: 24px;
        left: 8px;
        z-index: 200;
        background: gray;
      }
    </style>
    <title>Get Mouse Position</title>
  </head>
  <body>
    <div id="map"></div>
    <!-- Add mouse position info section. -->
    <div id="mouse-info">
      <h3>Mouse Hover Position</h3>
      <div id="mouse-hover-pos"></div>

      <h3>Mouse Click Position</h3>
      <div id="mouse-click-pos"></div>
    </div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 12,
      });

      map.on("load", () => {
        // Add `mousemove` event to get mouse position on hover.
        map.on("mousemove", (e) => {
          document.getElementById(
            "mouse-hover-pos"
          ).innerHTML = `Location: ${e.lngLat}`;
        });

        // Add `click` event to get mouse position on click.
        map.on("click", (e) => {
          document.getElementById(
            "mouse-click-pos"
          ).innerHTML = `Location: ${e.lngLat}`;
        });
      });
    </script>
  </body>
</html>
```
