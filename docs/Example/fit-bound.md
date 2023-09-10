---
sidebar_label: "Fit Bounds"
sidebar_position: 10
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Fit bounds

<iframe src="https://barikoi.com:8080/fit-bounds" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Add <span style={{color:"#e83e8c"}}>Style</span> for CSS

```css
#zoom-to {
  position: absolute;
  bottom: 16px;
  left: 16px;
  z-index: 200;
}
```

Add a <span style={{color:"#e83e8c"}}>button</span> to control zoom-to functionality

```html
<button id="zoom-to">Zoom To Bounds</button>
```

Add a data <span style={{color:"#e83e8c"}}>layer</span> to <span style={{color:"#e83e8c"}}>map</span>

```js
const lineString = {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [ 90.39239645004272, 23.821370253787848 ],
                        [ 90.39424180984497, 23.8209384002525 ],
                        [ 90.39475679397583, 23.819466161491107 ],
                        [ 90.39310455322266, 23.818955781488846 ],
                        [ 90.39520740509033, 23.817522780754427 ],
                        [ 90.38977861404419, 23.817758343605586 ],
                        [ 90.38767576217651, 23.82170395780815 ]
                    ]
                }
            }
        ]
    }

    map.on('load', () => {
        map.addSource('LineString', {
            "type": "geojson",
            "data": lineString
        })

        map.addLayer({
            "id": "LineString",
            "type": "line",
            "source": "LineString",
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#03fc49",
                "line-width": 5
            }
        })

```

Add <span style={{color:"#e83e8c"}}>event listener</span> to the button. Pass the first coordinates in the LineString to <span style={{color:"#e83e8c"}}>`lngLatBounds`</span> & wrap each coordinate pair in <span style={{color:"#e83e8c"}}>`extend`</span> to include them in the bounds result. A variation of this technique could be applied to zooming to the bounds of multiple Points or Polygon geomteries - it just requires wrapping all the coordinates with the extend method.

```js
document.getElementById('zoom-to').onclick = () => {
        // Geographic coordinates of the LineString
        const coordinates = lineString.features[0].geometry.coordinates

        const bounds = coordinates.reduce((bounds, coord) => {
            return bounds.extend(coord)
        }, new bkoigl.LngLatBounds(coordinates[0], coordinates[0]))

        // Map fit bounds to layer/extent
        map.fitBounds(bounds, {
            padding: 64
        })
    }
})
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

      #zoom-to {
        position: absolute;
        bottom: 16px;
        left: 16px;
        z-index: 200;
      }
    </style>
    <title>Fit Bounds</title>
  </head>
  <body>
    <div id="map"></div>
    <!-- Add a button to control zoom-to functionality -->
    <button id="zoom-to">Zoom To Bounds</button>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 12,
      });

      // Add a data layer to map
      const lineString = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [90.39239645004272, 23.821370253787848],
                [90.39424180984497, 23.8209384002525],
                [90.39475679397583, 23.819466161491107],
                [90.39310455322266, 23.818955781488846],
                [90.39520740509033, 23.817522780754427],
                [90.38977861404419, 23.817758343605586],
                [90.38767576217651, 23.82170395780815],
              ],
            },
          },
        ],
      };

      map.on("load", () => {
        map.addSource("LineString", {
          type: "geojson",
          data: lineString,
        });

        map.addLayer({
          id: "LineString",
          type: "line",
          source: "LineString",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#03fc49",
            "line-width": 5,
          },
        });

        // Add event listener to the button
        document.getElementById("zoom-to").onclick = () => {
          // Geographic coordinates of the LineString
          const coordinates = lineString.features[0].geometry.coordinates;

          const bounds = coordinates.reduce((bounds, coord) => {
            return bounds.extend(coord);
          }, new bkoigl.LngLatBounds(coordinates[0], coordinates[0]));

          // Map fit bounds to layer/extent
          map.fitBounds(bounds, {
            padding: 64,
          });
        };
      });
    </script>
  </body>
</html>
```
