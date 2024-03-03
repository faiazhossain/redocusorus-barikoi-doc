---
id: "npm-intro"
title: "Installation and setting up"
sidebar_label: "Npm installation"
sidebar_position: 1
---

<head>
  <title>Barikoi Documentation</title>
</head>

To install Barikoi Api's library, navigate to your project folder and run the command:

```node
npm install barikoiapis
```

<h4> Get your own <a href="https://developer.barikoi.com/register" target="__blank">YOUR BARIKOI API KEY</a> if you want to use autocomplete, reverseGeocode, nearby or rupantor data in your project.</h4>

```Config``` Import necessary functions from "barikoiapis" library. Set configuration with your Barikoi API key and version.

```js
import { setConfig, autocomplete, reverseGeocode, nearby, rupantor } from "barikoiapis";

setConfig({
    apiKey:
        "YOUR_BARIKOI_API_KEY_HERE",
    version: "v1",
});
```
After setting the config with <a href="https://developer.barikoi.com/register" target="__blank">YOUR BARIKOI API KEY</a> you can get the data of autocomplete, reverseGeocode, nearby or rupantor API.
