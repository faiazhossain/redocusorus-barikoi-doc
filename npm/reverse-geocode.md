---
id: "reverse-geocode"
title: "Reverse Geocode"
sidebar_label: "Reverse Geocode"
sidebar_position: 2
---

<head>
  <title>Barikoi Documentation</title>
</head>

```ReverseGeocode:``` Get reverse geocode data by providing latitude and longitude. 

```js
import { setConfig, reverseGeocode} from "barikoiapis";
reverseGeocode({ latitude: 23.810331, longitude: 90.412521 })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
```

<h5>This API initially returns:</h5> 

```id```, ```distance_within_meters```,  ```address```, ```area```, ```city```.

<h4>Optional Parameters:</h4>
You can customize the reverse geocoding request by including additional optional parameters. Here's an example of how to use optional parameters:

district (Optional): Specify the district for the response. Example:

```js
import { setConfig, reverseGeocode} from "barikoiapis";
reverseGeocode({ latitude: 23.810331, longitude: 90.412521, district: true })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
```



<a href="https://docs.barikoi.com/api#tag/v2.0/operation/revgeo_v2">Check other optional parameters for reverseGeoCode</a>