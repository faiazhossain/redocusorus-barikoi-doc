---
sidebar_label: "GeoJSON Layer"
sidebar_position: 15
---

# GeoJSON layer

<iframe src="https://bkoi-gl-example-geojson-layer.surge.sh/" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

- Demo <span style={{color:"#e83e8c"}}>GeoJSON</span> Data

```js
const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "LineString (Matikata ECB)",
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [90.38439273834229, 23.820879511022707],
          [90.38557291030884, 23.820486915474508],
          [90.38683891296387, 23.82029061725504],
          [90.3885769844055, 23.820035429125863],
          [90.38977861404419, 23.820251357575508],
          [90.39048671722412, 23.82068321339706],
          [90.39123773574829, 23.821272105383276],
          [90.39226770401001, 23.822057290541416],
          [90.39314746856688, 23.822528399355956],
          [90.39353370666504, 23.822685435247394],
          [90.39402723312378, 23.822057290541416],
          [90.39437055587769, 23.82162543929233],
          [90.3950572013855, 23.820997289455583],
          [90.39623737335205, 23.819642831024275],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Polygon (Matikata ECB)",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [90.39846897125244, 23.82480540118201],
            [90.39591550827026, 23.825335387253876],
            [90.39475679397583, 23.8235294999081],
            [90.39825439453125, 23.818936151448675],
            [90.40050745010376, 23.81978024049492],
            [90.40014266967773, 23.822606917325434],
            [90.39846897125244, 23.82480540118201],
          ],
        ],
      },
    },
  ],
};
```

- <span style={{color:"#e83e8c"}}>Hide / Show</span> Layers

```js
const layerVisibilityEl = document.getElementById("layer-visibility");
layerVisibilityEl.onclick = () => {
  // Check if layers exist and visible
  let layerVisible = false;
  layersIds.forEach((l) => {
    if (
      map.getLayer(l) &&
      map.getLayoutProperty(l, "visibility") === "visible"
    ) {
      layerVisible = true;
    }
  });

  if (layerVisible) {
    setLayerVisibility(false);
    layerVisibilityEl.innerHTML = "Show Layers";
  } else {
    setLayerVisibility(true);
    layerVisibilityEl.innerHTML = "Hide Layers";
  }
};
```

- <span style={{color:"#e83e8c"}}>Add / Remove</span> Layers

```js
const addLayersEl = document.getElementById("add-remove-layer");
addLayersEl.onclick = () => {
  // Check if layers exist
  let layerExists = false;
  layersIds.forEach((l) => {
    if (map.getLayer(l)) {
      layerExists = true;
    }
  });

  if (layerExists) {
    removeDataSourceAndLayers();
    addLayersEl.innerHTML = "Add Layers";
  } else {
    addDataSourceAndLayers();
    addLayersEl.innerHTML = "Remove Layers";
  }
};
```

- Mouse <span style={{color:"#e83e8c"}}>Hover</span> Popup

```js
const popup = new bkoigl.Popup({ focusAfterOpen: false });
layersIds.forEach((l) => {
  map.on("mousemove", l, (e) => {
    popup
      .setLngLat(e.lngLat)
      .setHTML(
        `<strong style="margin-right: 4px;">Area:</strong>
                    ${e.features[0].properties.name}`
      )
      .addTo(map);
  });

  map.on("mouseleave", l, () => {
    popup.remove();
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

      #control {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 100;
      }
    </style>
    <title>GeoJSON Layer</title>
  </head>
  <body>
    <div id="map"></div>
    <div id="control">
      <button id="layer-visibility">Hide Layers</button>
      <button id="add-remove-layer">Remove Layers</button>
    </div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 14,
      });

      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {
              name: "LineString (Matikata ECB)",
            },
            geometry: {
              type: "LineString",
              coordinates: [
                [90.38439273834229, 23.820879511022707],
                [90.38557291030884, 23.820486915474508],
                [90.38683891296387, 23.82029061725504],
                [90.3885769844055, 23.820035429125863],
                [90.38977861404419, 23.820251357575508],
                [90.39048671722412, 23.82068321339706],
                [90.39123773574829, 23.821272105383276],
                [90.39226770401001, 23.822057290541416],
                [90.39314746856688, 23.822528399355956],
                [90.39353370666504, 23.822685435247394],
                [90.39402723312378, 23.822057290541416],
                [90.39437055587769, 23.82162543929233],
                [90.3950572013855, 23.820997289455583],
                [90.39623737335205, 23.819642831024275],
              ],
            },
          },
          {
            type: "Feature",
            properties: {
              name: "Polygon (Matikata ECB)",
            },
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [90.39846897125244, 23.82480540118201],
                  [90.39591550827026, 23.825335387253876],
                  [90.39475679397583, 23.8235294999081],
                  [90.39825439453125, 23.818936151448675],
                  [90.40050745010376, 23.81978024049492],
                  [90.40014266967773, 23.822606917325434],
                  [90.39846897125244, 23.82480540118201],
                ],
              ],
            },
          },
        ],
      };
      const layersIds = ["route", "polygon", "polygon-border"];

      map.on("load", () => {
        // Add Layers
        addDataSourceAndLayers();

        const layerVisibilityEl = document.getElementById("layer-visibility");
        layerVisibilityEl.onclick = () => {
          // Check if layers exist and visible
          let layerVisible = false;
          layersIds.forEach((l) => {
            if (
              map.getLayer(l) &&
              map.getLayoutProperty(l, "visibility") === "visible"
            ) {
              layerVisible = true;
            }
          });

          if (layerVisible) {
            setLayerVisibility(false);
            layerVisibilityEl.innerHTML = "Show Layers";
          } else {
            setLayerVisibility(true);
            layerVisibilityEl.innerHTML = "Hide Layers";
          }
        };

        const addLayersEl = document.getElementById("add-remove-layer");
        addLayersEl.onclick = () => {
          // Check if layers exist
          let layerExists = false;
          layersIds.forEach((l) => {
            if (map.getLayer(l)) {
              layerExists = true;
            }
          });

          if (layerExists) {
            removeDataSourceAndLayers();
            addLayersEl.innerHTML = "Add Layers";
          } else {
            addDataSourceAndLayers();
            addLayersEl.innerHTML = "Remove Layers";
          }
        };

        const popup = new bkoigl.Popup({ focusAfterOpen: false });
        layersIds.forEach((l) => {
          map.on("mousemove", l, (e) => {
            popup
              .setLngLat(e.lngLat)
              .setHTML(
                `<strong style="margin-right: 4px;">Area:</strong>
                        ${e.features[0].properties.name}`
              )
              .addTo(map);
          });

          map.on("mouseleave", l, () => {
            popup.remove();
          });
        });
      });

      // Set Layer Visibility
      function setLayerVisibility(visibility) {
        layersIds.forEach((l) => {
          // If layer exists
          if (map.getLayer(l)) {
            map.setLayoutProperty(
              l,
              "visibility",
              visibility ? "visible" : "none"
            );
          }
        });
      }

      // Add Data Source & Layers
      function addDataSourceAndLayers() {
        // Add source
        map.addSource("geojson", {
          type: "geojson",
          data: geojson,
        });

        // Add Route Layer
        map.addLayer({
          id: "route",
          type: "line",
          source: "geojson",
          layout: {
            visibility: "visible",
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#008000",
            "line-width": 8,
          },
          filter: ["==", "$type", "LineString"],
        });

        // Add Polygon Layer
        map.addLayer({
          id: "polygon",
          type: "fill",
          source: "geojson",
          layout: {
            visibility: "visible",
          },
          paint: {
            "fill-color": "#FF0000",
            "fill-opacity": 0.4,
          },
          filter: ["==", "$type", "Polygon"],
        });

        // Add Polygon Border
        map.addLayer({
          id: "polygon-border",
          type: "line",
          source: "geojson",
          layout: {
            visibility: "visible",
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#008000",
            "line-width": 2,
          },
          filter: ["==", "$type", "Polygon"],
        });
      }

      // Remove Data Source & Layers
      function removeDataSourceAndLayers() {
        // Remove Layers
        layersIds.forEach((l) => {
          if (map.getLayer(l)) {
            map.removeLayer(l);
          }
        });

        // Remove Source
        if (map.getSource("geojson")) {
          map.removeSource("geojson");
        }
      }
    </script>
  </body>
</html>
```
