---
sidebar_label: "Barikoi map place picker"
title: "Barikoi map place picker"
sidebar_position: 1
---

<head>
  <title>Barikoi Documentation</title>
</head>

Barikoi Map Place picker is a flutter library that provides option to pick a place from map location or search using Barikoi Map and APIs.

# Installation

<h3>Github</h3>
If this Dart package is published to Github, please include the following in pubspec.yaml

```js
//github.com/barikoi/barikoi_map_place_picker.git
dependencies: barikoi_maps_place_picker: git: url: https: ref: main;
```

instead of main you can specify the specific commit that works for you

<h3>Local</h3>
To use the package in your local drive, please include the following in pubspec.yaml

```js
dependencies:
  barikoi_maps_place_picker:
    path: /path/to/barikoi_map_place_picker
```

# Getting Started

For iOS platform, go to your projects ios folder and add these lines to your pod file :

```js
source 'https://cdn.cocoapods.org/'
source 'https://github.com/m0nac0/flutter-maplibre-podspecs.git'

pod 'MapLibre'
pod 'MapLibreAnnotationExtension'
```

open your info.plist file and add these string resources

```xml ...
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>[Your explanation here]</string>
```

For android, add the location permissions in the app manifest

```js
     <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
```

To use the place picker as a widget, add the following code

```js
PlacePicker(
    apiKey: "API_KEY", //Barikoi API key
    initialPosition: HomePage.kInitialPosition, //initial location position to start the map with
    useCurrentLocation: true, // option to use the current location for picking a place, true by default
    selectInitialPosition: true, //option to load the initial position to start the map with
    usePinPointingSearch: true,  //option to use reversegeo api to get place from location point, default value is true
    getAdditionalPlaceData: [ PlaceDetails.area_components, PlaceDetails.addr_components, PlaceDetails.district ] //option to retrive addtional place data, will count extra api calls
    onPlacePicked: (result) {   //returns the place object selected in the place picker
    selectedPlace = result;

    },
);
```
