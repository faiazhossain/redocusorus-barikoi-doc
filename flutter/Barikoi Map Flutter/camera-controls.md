---
id: "camera-controls"
title: "Camera Controls"
sidebar_label: "Camera Controls"
sidebar_position: 4
---

To control map camera position and camera animation , check out this code

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
  static const apiKey=BARIKOI_API_KEY;   //barikoi API key, get it from https://developer.barikoi.com
  static const mapUrl= 'https://map.barikoi.com/styles/$styleId/style.json?key=$apiKey';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: MaplibreMap(
          initialCameraPosition: initialPosition,   // set map initial location where map will show first
          onMapCreated: (MaplibreMapController mapController){  //called when map object is created
            mController= mapController;   // use the MaplibreMapController for map operations
          },
          styleString: mapUrl ,  // barikoi map style url
          onStyleLoadedCallback: (){
            //implement any of the funtions below to test different kind of camera controls, here newCameraPosition function is implemented
            _setCameraPosition(mController)
          }
        ),
    );
  }
}

... 


void _setCameraPosition(MaplibreMapController? mController){
  //set new CameraPostion for map
  mController?.animateCamera(
      CameraUpdate.newCameraPosition(
        const CameraPosition(
          bearing: 270.0, //bearing of the map view, value range 0- 360
          target: LatLng(23.3160895, 90.81294527),   // LatLng position of the location
          tilt: 30.0, // tilt the map by degree
          zoom: 17.0, // zoom level of the map
        ),
      )
  );
}

void _setNewLatlng(MaplibreMapController? mController){
  //animate camera to the Latlng position
  mController?.animateCamera(
      CameraUpdate.newLatLng(
        const LatLng(23.824775, 90.360954),   // LatLng position of the location
      ),
      duration: const Duration(seconds: 3),     // map camera animation duration
    ).then((result) => debugPrint("mController?.animateCamera() returned $result"));
}

void _setNewLatlngZoom( MaplibreMapController? mController){
  //animate camera to the Latlng position with zoom level
  mController?.animateCamera(
    CameraUpdate.newLatLngZoom(const LatLng(23.774506, 90.444063), 7),
    duration: const Duration(milliseconds: 300),
  );
}

void _setlatlngBounds(MaplibreMapController? mController){
  //animate camera to the Latlng bounds with 2 Latlng points, the southwest and northeast corner position of the map viewport
  mController?.animateCamera(
    CameraUpdate.newLatLngBounds(
      LatLngBounds(
          southwest: const LatLng(23.878921, 90.345552),
          northeast: const LatLng(23.736799, 90.451606)
      ),
      left: 10,  // padding in 4 directions
      top: 5,
      bottom: 25,
      right: 10
    ),
  );
}

void _scrollby(MaplibreMapController? mController){
  //scroll the map programatically in x and y axis
  mController?.animateCamera(
    CameraUpdate.scrollBy(150.0, -225.0),
  );
}

void _zoomBy( MaplibreMapController? mController){
  //zoom in/out the map in current position, negative values for zoom out , positive for zoom in
  mController?.animateCamera(
    CameraUpdate.zoomBy(-0.5),
  );
}
```