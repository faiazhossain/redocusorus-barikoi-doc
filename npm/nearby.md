---
id: "nearby"
title: "Nearby"
sidebar_label: "Nearby"
sidebar_position: 4
---

<head>
  <title>Barikoi Documentation</title>
</head>

```Nearby:``` Get nearby places by providing radius and coordinates.

```js
import { setConfig, nearby} from "barikoiapis";
nearby(1, 5, { latitude: 23.810331, longitude: 90.412521 })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
```

<h5>Barikoi nearby initially returns:</h5> 

 ```id```, ```name```, ```distance_in_meters```, ```longitude```, ```latitude```, ```pType```, ```Address```, ```area```, ```city```, ```postCode```, ```subType```, ```uCode```, ```ST_AsText(location)```.