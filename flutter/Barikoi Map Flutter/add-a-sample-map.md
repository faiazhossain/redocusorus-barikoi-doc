---
id: "add-a-simple-map"
title: "Add a Simple Map"
sidebar_label: "Add a Simple Map"
sidebar_position: 2
---

You can add asimple map using the MaplibreMap widget. Set the style URL and API key in the widget from barikoi developer dashboard. Check out this sample code : 

```dart
import 'package:flutter/material.dart';
import 'package:maplibre_gl/mapbox_gl.dart';

class SimpleMap extends StatefulWidget{
  @override
  State<SimpleMap> createState() => _SimpleMapState();
}

class _SimpleMapState extends State<SimpleMap>{
  CameraPosition initialPosition= CameraPosition(target: LatLng(23.835677, 90.380325), zoom: 12);   //CameraPosition object for initial location in map
  MaplibreMapController? mController;

  static const styleId = 'osm-liberty' ;    //barikoi map style id
  static const apiKey = BARIKOI_API_KEY;   //barikoi API key, get it from https://developer.barikoi.com
  static const mapUrl= 'https://map.barikoi.com/styles/$styleId/style.json?key=$apiKey';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: MaplibreMap(
          initialCameraPosition: initialPosition,   // set map initial location where map will show first
          onMapCreated: (MaplibreMapController mapController){  //called when map object is created
            mController= mapController;   // use the MaplibreMapController for map operations
          },
          styleString: mapUrl , // barikoi map style url
        ),
    );
  }
}
```