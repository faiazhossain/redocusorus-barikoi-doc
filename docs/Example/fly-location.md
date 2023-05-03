---
sidebar_label: "Fly to Location"
sidebar_position: 9
---

# Fly to Location

<iframe src="http://barikoi.com:8080/fly-to-location" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Add <span style={{color:"#e83e8c"}}>Styles</span> for CSS

```css
#fly-to {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 200;
}
```

Add a <span style={{color:"#e83e8c"}}>button</span> to control <span style={{color:"#e83e8c"}}>fly-to</span> functionality

```html
<button id="fly-to">Fly To Barikoi HQ</button>
```

Add <span style={{color:"#e83e8c"}}>`flyTo`</span> method with custom location and zoom level

```js
document.getElementById("fly-to").onclick = () => {
  map.flyTo({
    center: [90.364037, 23.823602],
    zoom: 16,
  });
};
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
      #fly-to {
        position: absolute;
        bottom: 16px;
        left: 16px;
        z-index: 200;
      }
    </style>
    <title>Fly To Location</title>
  </head>
  <body>
    <div id="map"></div>
    <!-- Add a button to control fly-to functionality -->
    <button id="fly-to">Fly To Barikoi HQ</button>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.364037, 23.823602],
        zoom: 12,
      });

      map.on("load", () => {
        // Add `flyTo` method with custom location and zoom level.
        document.getElementById("fly-to").onclick = () => {
          map.flyTo({
            center: [90.364037, 23.823602],
            zoom: 16,
          });
        };
      });
    </script>
  </body>
</html>
```
