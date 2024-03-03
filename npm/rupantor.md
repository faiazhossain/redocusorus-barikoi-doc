---
id: "rupantor"
title: "Rupantor"
sidebar_label: "Rupantor"
sidebar_position: 5
---

<head>
  <title>Barikoi Documentation</title>
</head>

This API initially returns id, address, area, city, distance_within_meters without any additional call

```Rupantor:``` Get Rupantor data by providing a query string

```js
import { setConfig, rupantor} from "barikoiapis";
rupantor({ q: "barikoihq" })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
```

<h5>This API initially returns:</h5> 

```given_address```, ```fixed_address```,  ```address_status```, ```geocoded_address```, ```confidence_score_percentage```,```status```.

<h4>Optional Parameters:</h4>
You can customize the rupantor request by including additional optional parameters. Here's an example of how to use optional parameters:

thana (Optional): Specify thana to true for getting the additional thana response. Example:

```js
import { setConfig, rupantor} from "barikoiapis";
rupantor({ q: "barikoihq",thana:true })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
```

<a href="https://docs.barikoi.com/api#tag/v2.0/operation/rupantor_geocoder_v2">Check other optional parameters for rupantor</a>