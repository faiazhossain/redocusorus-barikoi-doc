---
sidebar_label: "Autocomplete Tutorial"
sidebar_position: 6
---

# Autocomplete Tutorial

Autocomplete demo using OpenStreetMap.

# Source code:

```html
<!DOCTYPE html>
<html lang="en">
  ​
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Barikoi Autocomplete</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/barikoi/barikoi-js@b6f6295467c19177a7d8b73ad4db136905e7cad6/dist/barikoi.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans"
      rel="stylesheet"
    />
    ​
    <link
      rel="stylesheet"
      href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css"
      integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
      crossorigin=""
    />
    ​
    <script
      src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"
      integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
      crossorigin=""
    ></script>
    ​
    <style>
      body {
        font-family: "Open Sans", sans-serif;
      }
      ​ h1 {
        text-align: center;
      }
    </style>
    ​
  </head>
  ​
  <body>
    <h1>Barikoi Autocomplete Demo</h1>
    ​
    <div>
      <input type="text" class=" bksearch" />
      <div class="bklist"></div>
    </div>
    ​
    <div id="map" style="height: 400px;"></div>
    ​ ​
    <script src="https://cdn.jsdelivr.net/gh/barikoi/barikoi-js@b6f6295467c19177a7d8b73ad4db136905e7cad6/dist/barikoi.min.js?key:MTM0MjpTTzVSU0hCOFFO"></script>
    ​ ​
    <script>
      const defaultMarker = [23.7104, 90.40744];
      let map = L.map("map");
      map.setView(defaultMarker, 13);
      // Set up the OSM layer
      L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(map);
      L.marker(defaultMarker).addTo(map);
      Bkoi.onSelect(function () {
        // get selected data from dropdown list
        let selectedPlace = Bkoi.getSelectedData();
        // center of the map
        let center = [selectedPlace.latitude, selectedPlace.longitude];
        // Add marker to the map & bind popup
        map.setView(center, 19);
        L.marker(center).addTo(map).bindPopup(selectedPlace.address);
      });
    </script>
  </body>
  ​
</html>
```

[Get the full tutorial link](https://medium.com/@barikoibd/how-to-add-location-search-autocomplete-functionality-to-your-website-in-2-minutes-using-barikoi-js-f99b351ba997)
