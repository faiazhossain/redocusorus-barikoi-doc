---
sidebar_label: "Measure Polygon Area"
sidebar_position: 13
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Measure polygon area

<iframe src="http://barikoi.com:8080/measure-polygon-area" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Add Bkoi GL Draw and <span style={{color:"#e83e8c"}}>turf.js</span>

```html
<link
  rel="stylesheet"
  href="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl-draw.css"
/>
<script src="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl-draw.js"></script>
<script src="https://unpkg.com/@turf/turf@6.3.0/turf.min.js"></script>
```

Add Area Info container <span style={{color:"#e83e8c"}}>styles</span>

```css
#area-info {
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

Add <span style={{color:"#e83e8c"}}>Area</span> Info box

```html
<div id="area-info">
  <p>Draw a polygon using the draw tools.</p>
  <div id="polygon-area"></div>
</div>
```

Add <span style={{color:"#e83e8c"}}>Draw</span> Polygon Controls

```js
const draw = new bkoidraw.BkoiDraw({
  displayControlsDefault: false,
  controls: {
    polygon: true,
    trash: true,
  },
});
map.addControl(draw);
```

Add <span style={{color:"#e83e8c"}}>draw</span> events to <span style={{color:"#e83e8c"}}>calculate</span> cumulative <span style={{color:"#e83e8c"}}>area</span> of the drawn features

```js
map.on("draw.create", measureArea);
map.on("draw.delete", measureArea);
map.on("draw.update", measureArea);

function measureArea(e) {
  const data = draw.getAll();
  const answer = document.getElementById("polygon-area");

  if (data.features.length > 0) {
    const area = turf.area(data);

    // Restrict to area to 2 decimal points
    const roundedArea = Math.round(area * 100) / 100;
    answer.innerHTML =
      "<p><strong>" + roundedArea + "</strong></p><p>square meters</p>";
  } else {
    answer.innerHTML = "";
    if (e.type !== "draw.delete") {
      alert("Use the draw tools to draw a polygon!");
    }
  }
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
    <link
      rel="stylesheet"
      href="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl-draw.css"
    />
    <script src="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl-draw.js"></script>
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

      #area-info {
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
    <title>Measure Polygon Area</title>
  </head>
  <body>
    <div id="map"></div>
    <div id="area-info">
      <p>Draw a polygon using the draw tools.</p>
      <div id="polygon-area"></div>
    </div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 12,
      });

      map.on("load", () => {
        const draw = new bkoidraw.BkoiDraw({
          displayControlsDefault: false,
          controls: {
            polygon: true,
            trash: true,
          },
        });
        map.addControl(draw);

        map.on("draw.create", measureArea);
        map.on("draw.delete", measureArea);
        map.on("draw.update", measureArea);

        function measureArea(e) {
          const data = draw.getAll();
          const answer = document.getElementById("polygon-area");

          if (data.features.length > 0) {
            const area = turf.area(data);

            // Restrict to area to 2 decimal points
            const roundedArea = Math.round(area * 100) / 100;
            answer.innerHTML =
              "<p><strong>" + roundedArea + "</strong></p><p>square meters</p>";
          } else {
            answer.innerHTML = "";
            if (e.type !== "draw.delete") {
              alert("Use the draw tools to draw a polygon!");
            }
          }
        }
      });
    </script>
  </body>
</html>
```
