---
sidebar_label: "Add Marker on Map Click"
sidebar_position: 7
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Add Marker on Map Click

<iframe src="https://barikoi.com:8080/add-marker-on-click" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Register <span style={{color:"#e83e8c"}}>'click'</span> event and add <span style={{color:"#e83e8c"}}>marker</span>

```js
map.on("load", () => {
  // Register 'click' event
  map.on("click", (e) => {
    // Add Marker
    const marker = new bkoigl.Marker({ draggable: true })
      .setLngLat(e.lngLat)
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
    </style>
    <title>Add Marker on Map Click</title>
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

      map.on("load", () => {
        // Register 'click' event
        map.on("click", (e) => {
          // Add Marker
          const marker = new bkoigl.Marker({ draggable: true })
            .setLngLat(e.lngLat)
            .addTo(map);
        });
      });
    </script>
  </body>
</html>
```
