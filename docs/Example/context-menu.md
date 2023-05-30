---
sidebar_label: "Context Menu"
sidebar_position: 16
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Context menu

<iframe src="http://barikoi.com:8080/context-menu" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

- Add <span style={{color:"#e83e8c"}}>Context Menu</span> Styles

```css
.context-menu {
  box-sizing: border-box;
  padding: 4px;
  background: #fff;
  border: 1px solid black;
  border-radius: 4px;
}

.context-menu p {
  margin: 0;
  padding: 4px;
  box-sizing: border-box;
  background: #f6f6f6;
  cursor: pointer;
  border-radius: 4px;
}

.context-menu p:hover {
  background: #d8d8d8;
}
```

- Context Menu <span style={{color:"#e83e8c"}}>Event</span>

```js
map.on("contextmenu", (e) => {
  if (marker) {
    marker.remove();
  }

  const markerEl = createContextMenu();
  marker = new bkoigl.Marker(markerEl)
    .setLngLat(e.lngLat)
    .setOffset([32, 32])
    .addTo(map);
});
```

- <span style={{color:"#e83e8c"}}>Create</span> Context Menu

```js
function createContextMenu() {
  const container = document.createElement("div");
  container.className = "context-menu";

  const item1 = document.createElement("p");
  item1.innerHTML = "Option 1";
  item1.onclick = () => {
    alert("Clicked Option 1");
  };

  const item2 = document.createElement("p");
  item2.innerHTML = "Option 2";
  item2.onclick = () => {
    alert("Clicked Option 2");
  };

  container.appendChild(item1);
  container.appendChild(item2);

  return container;
}
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

      .context-menu {
        box-sizing: border-box;
        padding: 4px;
        background: #fff;
        border: 1px solid black;
        border-radius: 4px;
      }

      .context-menu p {
        margin: 0;
        padding: 4px;
        box-sizing: border-box;
        background: #f6f6f6;
        cursor: pointer;
        border-radius: 4px;
      }

      .context-menu p:hover {
        background: #d8d8d8;
      }
    </style>
    <title>Context Menu</title>
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
        let marker = null;

        // Context Menu Event
        map.on("contextmenu", (e) => {
          if (marker) {
            marker.remove();
          }

          const markerEl = createContextMenu();
          marker = new bkoigl.Marker(markerEl)
            .setLngLat(e.lngLat)
            .setOffset([32, 32])
            .addTo(map);
        });

        // Remove Context Menu
        map.on("click", () => {
          marker.remove();
        });
      });

      // Create Context Menu
      function createContextMenu() {
        const container = document.createElement("div");
        container.className = "context-menu";

        // Menu Items
        const item1 = document.createElement("p");
        item1.innerHTML = "Option 1";
        item1.onclick = () => {
          alert("Clicked Option 1");
        };

        const item2 = document.createElement("p");
        item2.innerHTML = "Option 2";
        item2.onclick = () => {
          alert("Clicked Option 2");
        };

        container.appendChild(item1);
        container.appendChild(item2);

        return container;
      }
    </script>
  </body>
</html>
```
