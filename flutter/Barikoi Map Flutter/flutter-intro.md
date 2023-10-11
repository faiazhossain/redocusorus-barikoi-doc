---
id: "flutter-intro"
title: "Getting Started"
sidebar_label: "Getting Started"
sidebar_position: 1
---

<head>
  <title>Barikoi Documentation</title>
</head>

To implement Barikoi map in you android app, we recommend using Flutter Maplibre GL as it is quick and easy to install and use with Barikoi maps. 

### Prerequisite
For this example you will need: 
1. A Barikoi API key, which you can get in [Developer Dashboard](http://developer.barikoi.com "Developer Dashboard")
2. Knowledge in Flutter, Dart
3. Barikoi map style 
   
### Get Dependencies
You can use Maplibre flutter by referencing in theyour puspec.yaml like this: 

```yaml
dependencies:
    ...
    maplibre_gl:
      git:
        url: https://github.com/maplibre/flutter-maplibre-gl.git
        ref: main
```


#### Web
Include the following JavaScript and CSS files in the head of the web/index.html file.
```js
<script src='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.js'></script>
<link href='https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css' rel='stylesheet' />
```

#### Location Features
#### Android
Add the ACCESS_COARSE_LOCATION or ACCESS_FINE_LOCATION permission in the application manifest android/app/src/main/AndroidManifest.xml to enable location features in an Android application:

```xml
<manifest ...
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

Starting from Android API level 23 you also need to request it at runtime. This plugin does not handle this for you. The example app uses the flutter 'location' plugin for this.

#### iOS
To enable location features in an iOS application:

If you access your users' location, you should also add the following key to ios/Runner/Info.plist to explain why you need access to their location data:

```xml
    <key>NSLocationWhenInUseUsageDescription</key>
    <string>[Your explanation here]</string>
```
    
A possible explanation could be: "Shows your location on the map".


You can check out the various functionalities in the sample code snippets listed in ths documentation. To have a more detailed understanding of the classes and functionalities, check out this [Documentation](https://htmlpreview.github.io/?https://raw.githubusercontent.com/maplibre/flutter-maplibre-gl/docs/doc/api/maplibre_gl/maplibre_gl-library.html) 