---
sidebar_label: "Add popup to marker"
sidebar_position: 6
---

# Add popup to marker

Attach a <span style={{color:"#e83e8c"}}>Popup</span> to a <span style={{color:"#e83e8c"}}>Marker</span> and display it on click.

<iframe src="http://barikoi.com:8080/add-popup-to-marker" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Create <span style={{color:"#e83e8c"}}>Popup</span>

```js
const popup = new bkoigl.Popup({ focusAfterOpen: false }).setHTML(
  "<h3>Barikoi HQ</h3>"
);
```

Add <span style={{color:"#e83e8c"}}>Marker</span>

```js
const marker = new bkoigl.Marker()
  .setLngLat(lngLat)
  .setPopup(popup) // Attach Marker to Popup
  .addTo(map);
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
    <title>Add Popup To Marker</title>
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
        const lngLat = [90.3938010872331, 23.821600277500405];

        // Create Popup
        const popup = new bkoigl.Popup({ focusAfterOpen: false }).setHTML(
          "<h3>Barikoi HQ</h3>"
        );

        // Add Marker
        const marker = new bkoigl.Marker()
          .setLngLat(lngLat)
          .setPopup(popup) // Add Popup to Marker
          .addTo(map);
      });
    </script>
  </body>
</html>
```
