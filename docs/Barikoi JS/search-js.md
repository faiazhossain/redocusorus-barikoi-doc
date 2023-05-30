---
sidebar_label: "Search"
sidebar_position: 2
---

<head>
  <title>Barikoi Documentation</title>
</head>

# Search

# Bkoi.search(string, callback)

This method performs location search using Barikoi Search API. It accepts two arguments a query string and a callback function and returns an array of locations

# Example

```js
//  Search for 'cafe'

Bkoi.search("cafe", (response) => console.log(response));
```

Barikoi.js provides Autocomplete UI for search. Tutorial on Autocomplete UI can be found [here](https://medium.com/@barikoibd/how-to-add-location-search-autocomplete-functionality-to-your-website-in-2-minutes-using-barikoi-js-f99b351ba997)
