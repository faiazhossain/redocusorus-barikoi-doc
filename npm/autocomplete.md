---
id: "autocomplete"
title: "Autocomplete"
sidebar_label: "Autocomplete"
sidebar_position: 3
---

<head>
  <title>Barikoi Documentation</title>
</head>

```Autocomplete:``` Get autocomplete data by providing place name and area.

```js 
import { setConfig, autocomplete} from "barikoiapis";
autocomplete({ q: "barikoi", area: "mirpur" })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
```

<h5>Barikoi Autocomplete initially returns:</h5> 

```id```, ```longitude```, ```latitude```,  ```address```, ```area```, ```city```, ```postCode```, ```pType```, ```uCode```.

<h4>Optional Parameters:</h4>
You can customize the autocomplete request by including additional optional parameters. Here's an example of how to use optional parameters:

bangla (Optional): Specify bangla to true for getting the additional bangla response. Example:

```js
import { setConfig, autocomplete} from "barikoiapis";
autocomplete({ q: "barikoi", area: "mirpur", bangla:"true" })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
```

<a href="https://docs.barikoi.com/api#tag/v2.0/operation/autocomplete_v2">Check other optional parameters for autocomplete</a>