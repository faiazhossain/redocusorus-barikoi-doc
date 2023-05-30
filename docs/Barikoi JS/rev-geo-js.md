---
sidebar_label: "Reverse Geocoding"
sidebar_position: 4
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Reverse Geocoding

# Reverse Geocode

# Bkoi.reverseGeo(long, lat, callback)

This method performs location search using Barikoi Reverse Geocode API. It accepts three arguments a longitude, a latitude and a callback function and returns a Place object containing place information

# Example

```js
//  Get Reverse Geo Address

Bkoi.reverseGeo(90.36668110638857, 23.83723803415923, (response) =>
  console.log(JSON.parse(response))
);
```
