---
sidebar_label: "Geocoding"
sidebar_position: 3
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Geocoding

# Geocode

# Bkoi.geocode(place_id, callback)

This method performs location search using Barikoi Geocode API. It accepts a and a callback function and returns an array containing place information. Place_id can be found in Bkoi.search('example', callback) function's response

# Example

```js
//  Get Geo Address

Bkoi.geocode(147, (response) => console.log(JSON.parse(response)));
```
