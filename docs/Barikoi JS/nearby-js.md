---
sidebar_label: "Nearby"
sidebar_position: 5
---

# Nearby

# Bkoi.nearby(long, lat, callback)

This method performs location search using Barikoi Nearby API. It accepts three arguments a longitude, a latitude and a callback function and returns an array of nearby locations

# Example

```js
//  Get Nearby Locations

Bkoi.nearby(90.36668110638857, 23.83723803415923, (response) =>
  console.log(JSON.parse(response))
);
```
