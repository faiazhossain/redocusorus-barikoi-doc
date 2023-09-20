# Barikoi Map android

## QuickStart

To implement Barikoi map in you android app, we recommend using Maplibre Android SDK as it is quick and easy to install and use with Barikoi maps. 

### Prerequisite
For this example you will need: 
1. A Barikoi API key, which you can get in [Developer Dashboard](http://developer.barikoi.com "Developer Dashboard")
2. Knowledge in Kotlin/java
3. Barikoi map style 
   
### Get Dependencies
Add bintray Maven repositories to your project-level Gradle file (usually {project}/{app-module}/build.gradle).

```gradle
allprojects {
    repositories {
    ...
    mavenCentral()
    }
}
```

Then add the dependency in your dependencies { ... }:
```gradle
implementation("org.maplibre.gl:android-sdk:10.2.0")
```


To add the map, add this code in your activity layout xml file
```xml
<com.mapbox.mapboxsdk.maps.MapView
        android:id="@+id/mapView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        mapbox:maplibre_uiAttribution="true"
        mapbox:maplibre_uiAttributionMarginLeft="5dp"
        mapbox:maplibre_uiLogo="false"
        />
```


- [Add a Simple Map ](#add-a-simple-map)




## Add Simple Map 
Check out this code to add a simple map to you app
```kotlin
package com.barikoi.mapdemo

import androidx.core.app.ActivityCompat
import com.mapbox.mapboxsdk.Mapbox
import com.mapbox.mapboxsdk.annotations.Marker
import com.mapbox.mapboxsdk.annotations.MarkerOptions
import com.mapbox.mapboxsdk.camera.CameraPosition
import com.mapbox.mapboxsdk.geometry.LatLng
import com.mapbox.mapboxsdk.location.LocationComponentActivationOptions
import com.mapbox.mapboxsdk.location.LocationComponentOptions
import com.mapbox.mapboxsdk.location.engine.LocationEngineRequest
import com.mapbox.mapboxsdk.location.modes.CameraMode
import com.mapbox.mapboxsdk.maps.MapView
import com.mapbox.mapboxsdk.maps.MapboxMap

class MapActivity : AppCompatActivity() {
    private lateinit   var map: MapboxMap
    private lateinit var mapView: MapView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Mapbox.getInstance(this)
        setContentView(R.layout.activity_map)

        //map style name for style link
        val styleId = "osm-liberty"

        // get the api key from barikoi developer panel https://developer.barikoi.com
        apiKey = getString(R.string.barikoi_api_key)

        // Build the style URL
        val styleUrl = "https://map.barikoi.com/styles/$styleId/style.json?key=$apiKey"

      

        // Create map view
        mapView= findViewById(R.id.mapView)
        mapView.onCreate(savedInstanceState)
        mapView.getMapAsync { map ->
            this.map =map

            // Set the style after mapView was loaded
            map.setStyle(styleUrl) 
        }
    }

    override fun onStart() {
        super.onStart()
        mapView.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapView.onResume()
    }

    override fun onPause() {
        super.onPause()
        mapView.onPause()
    }

    override fun onStop() {
        super.onStop()
        mapView.onStop()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapView.onLowMemory()
    }

    override fun onDestroy() {
        super.onDestroy()
        mapView.onDestroy()
    }

}

```
## Change Style

## View Current Location
## Add Marker

Check out This code sample for adding a marker to the map 

```kotlin
import android.graphics.BitmapFactory
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.mapbox.mapboxsdk.Mapbox
import com.mapbox.mapboxsdk.annotations.Icon
import com.mapbox.mapboxsdk.annotations.MarkerOptions
import com.mapbox.mapboxsdk.geometry.LatLng
import com.mapbox.mapboxsdk.maps.MapView
import com.mapbox.mapboxsdk.maps.MapboxMap

class MarkerMapActivity : AppCompatActivity() {
    private lateinit   var map: MapboxMap
    private lateinit var mapView: MapView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Mapbox.getInstance(this)
        setContentView(R.layout.activity_marker_map)


        //map style name for style link
        val styleId = "osm-liberty"

        // get the api key from barikoi developer panel https://developer.barikoi.com
        val apiKey = getString(R.string.barikoi_api_key)

        // Build the style URL
        val styleUrl = "https://map.barikoi.com/styles/$styleId/style.json?key=$apiKey"



        // Create map view
        mapView= findViewById(R.id.mapView)
        mapView.onCreate(savedInstanceState)
        mapView.getMapAsync { map ->
            this.map =map

            // Set the style after mapView was loaded
            map.setStyle(styleUrl){ style->
                //add amarker in the map
                map.addMarker(
                    MarkerOptions()
                        .setPosition(LatLng(23.8345,90.38044))  //set lat lon position of the marker
                        .setTitle("Map Marker") // set the title of the marker, will show on marker click

                )
            }
            
            
            //get marker click event with marker info
            map.setOnMarkerClickListener (object: MapboxMap.OnMarkerClickListener{
                override fun onMarkerClick(marker: Marker): Boolean {
                    Toast.makeText(applicationContext, "clicked on marker", Toast.LENGTH_LONG).show()
                    return true
                }
            })
        }
    }

    override fun onStart() {
        super.onStart()
        mapView.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapView.onResume()
    }

    override fun onPause() {
        super.onPause()
        mapView.onPause()
    }

    override fun onStop() {
        super.onStop()
        mapView.onStop()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapView.onLowMemory()
    }

    override fun onDestroy() {
        super.onDestroy()
        mapView.onDestroy()
    }
}
```
## Add Line
Check out this code to add lines to your map

```kotlin
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import com.mapbox.mapboxsdk.Mapbox
import com.mapbox.mapboxsdk.annotations.Polyline
import com.mapbox.mapboxsdk.annotations.PolylineOptions
import com.mapbox.mapboxsdk.camera.CameraUpdateFactory
import com.mapbox.mapboxsdk.geometry.LatLng
import com.mapbox.mapboxsdk.geometry.LatLngBounds
import com.mapbox.mapboxsdk.maps.MapView
import com.mapbox.mapboxsdk.maps.MapboxMap
import com.mapbox.mapboxsdk.maps.MapboxMap.OnPolylineClickListener

class LineMapActivity : AppCompatActivity() {

    private lateinit   var map: MapboxMap
    private lateinit var mapView: MapView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Mapbox.getInstance(this)
        setContentView(R.layout.activity_add_map)

        //map style name for style link
        val styleId = "osm-liberty"

        // get the api key from barikoi developer panel https://developer.barikoi.com
        val apiKey = getString(R.string.barikoi_api_key)

        // Build the style URL
        val styleUrl = "https://map.barikoi.com/styles/$styleId/style.json?key=$apiKey"

        //Line points array
        val linepoints = ArrayList<LatLng>()
        // Add line points
        linepoints.add(LatLng(23.87397849117633,90.4004025152986,))
        linepoints.add(LatLng(23.860512893207584,90.4004025152986))
        linepoints.add(LatLng(23.837857327354314,90.41815482211757))
        linepoints.add(LatLng(23.82212196615106,90.42035665862238))
        linepoints.add(LatLng(23.812428033815493,90.40370527005587))
        linepoints.add(LatLng(23.762436156214207,90.39462262442248))

        // Create map view
        mapView= findViewById(R.id.mapView)
        mapView.onCreate(savedInstanceState)
        mapView.getMapAsync { map ->
            this.map =map

            // Set the style after mapView was loaded
            map.setStyle(styleUrl){style->
                //after style is set, add line to map
                val line :Polyline =map.addPolyline(PolylineOptions()
                    .addAll(linepoints)  //add all the line points
                    .width(4.0F)    //set width of the line
                    .color(Color.BLUE)     // set color of the line
                )

                //move map camera on the line
                map.moveCamera( CameraUpdateFactory.newLatLngBounds( LatLngBounds.fromLatLngs(line.points), 200))

            }

            //get line click event in map
            map.setOnPolylineClickListener(object: OnPolylineClickListener{
                override fun onPolylineClick(polyline: Polyline) {
                    Toast.makeText(applicationContext, "Line clicked", Toast.LENGTH_LONG).show()
                }

            })

        }
    }

    override fun onStart() {
        super.onStart()
        mapView.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapView.onResume()
    }

    override fun onPause() {
        super.onPause()
        mapView.onPause()
    }

    override fun onStop() {
        super.onStop()
        mapView.onStop()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapView.onLowMemory()
    }

    override fun onDestroy() {
        super.onDestroy()
        mapView.onDestroy()
    }

}
```
## Add Polygon
Check out this code to add polygon to the map from polygon points 
```kotlin
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.mapbox.mapboxsdk.Mapbox
import com.mapbox.mapboxsdk.annotations.PolygonOptions
import com.mapbox.mapboxsdk.camera.CameraUpdateFactory
import com.mapbox.mapboxsdk.geometry.LatLng
import com.mapbox.mapboxsdk.geometry.LatLngBounds
import com.mapbox.mapboxsdk.maps.MapView
import com.mapbox.mapboxsdk.maps.MapboxMap

class PolygonMapActivity : AppCompatActivity() {
    private lateinit   var map: MapboxMap
    private lateinit var mapView: MapView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Mapbox.getInstance(this)
        setContentView(R.layout.activity_add_map)


        //map style name for style link
        val styleId = "osm-liberty"

        // get the api key from barikoi developer panel https://developer.barikoi.com
        val apiKey = getString(R.string.barikoi_api_key)

        // Build the style URL
        val styleUrl = "https://map.barikoi.com/styles/$styleId/style.json?key=$apiKey"

        //points list for the polygon
        val polygonpoints: ArrayList<LatLng> = ArrayList()
        polygonpoints.add(LatLng(23.85574361143307, 90.38354443076582))
        polygonpoints.add(LatLng(23.823632508626005,90.40521296373265,))
        polygonpoints.add(LatLng(23.82639837105691,90.42285014172887))
        polygonpoints.add(LatLng(23.86204198543561,90.40050971626783))

        // Create map view
        mapView= findViewById(R.id.mapView)
        mapView.onCreate(savedInstanceState)
        mapView.getMapAsync { map ->
            this.map =map

            // Set the style after mapView was loaded
            map.setStyle(styleUrl){ style->
                //after style loaded, then add polygon to map
                val polygon = map.addPolygon(PolygonOptions()
                    .addAll(polygonpoints)  //add all points for the polygon
                    .fillColor(Color.parseColor("#ccebb9")) // you can add fill color and stroke of the polygon from hex string
                    .strokeColor(Color.parseColor("#080808"))
                    .alpha(0.3F) // add transparency to the polygon fill color by setting alpha value from 0.0 to 1.0
                )

                //focus map on the polygon
                map.moveCamera( CameraUpdateFactory.newLatLngBounds( LatLngBounds.fromLatLngs(polygon.points), 50))

            }


        }
    }

    override fun onStart() {
        super.onStart()
        mapView.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapView.onResume()
    }

    override fun onPause() {
        super.onPause()
        mapView.onPause()
    }

    override fun onStop() {
        super.onStop()
        mapView.onStop()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapView.onLowMemory()
    }

    override fun onDestroy() {
        super.onDestroy()
        mapView.onDestroy()
    }


}
```
## Add Geometry
You can add geometry features in map from geojson data using Layers. Check out the below code to add layers in map

```kotlin
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.mapbox.geojson.Feature
import com.mapbox.mapboxsdk.Mapbox
import com.mapbox.mapboxsdk.camera.CameraUpdateFactory
import com.mapbox.mapboxsdk.geometry.LatLng
import com.mapbox.mapboxsdk.maps.MapView
import com.mapbox.mapboxsdk.maps.MapboxMap
import com.mapbox.mapboxsdk.style.layers.FillLayer
import com.mapbox.mapboxsdk.style.layers.LineLayer
import com.mapbox.mapboxsdk.style.layers.Property
import com.mapbox.mapboxsdk.style.layers.PropertyFactory
import com.mapbox.mapboxsdk.style.sources.GeoJsonSource

class GeometryMapActivity : AppCompatActivity() {
    private lateinit   var map: MapboxMap
    private lateinit var mapView: MapView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Mapbox.getInstance(this)
        setContentView(R.layout.activity_geometry_map)


        //map style name for style link
        val styleId = "osm-liberty"

        // get the api key from barikoi developer panel https://developer.barikoi.com
        val apiKey = getString(R.string.barikoi_api_key)

        // Build the style URL
        val styleUrl = "https://map.barikoi.com/styles/$styleId/style.json?key=$apiKey"


        //geometry geosjon data
        val geometryjson = """
            {
                "type": "Feature",
                "properties": {},
                "geometry":
                {
                  "type": "Polygon",
                  "coordinates": [
                    [
                        [90.4245719514072,23.8498893170947],[90.4162572277404,23.8593578587565],
                        [90.4063700498334,23.8578960563255],[90.406494,23.852892],
                        [90.400035,23.860683],[90.3924952036647,23.8614377480597],
                        [90.3852827038556,23.856767705799],[90.393448,23.845689],
                        [90.3927183589261,23.8419405320778],[90.4014731602744,23.8310647094072],
                        [90.4070952270173,23.8308912076182],[90.4180521159278,23.8383449571236],
                        [90.4223406961995,23.8431574279637],[90.421858,23.846121],
                        [90.4245719514072,23.8498893170947]
                      ]
                    
                  ]
                }
            }
         """
        //create feature object from the Geojson
        val feature = Feature.fromJson(geometryjson)

        // Create map view
        mapView= findViewById(R.id.mapView)
        mapView.onCreate(savedInstanceState)
        mapView.getMapAsync { map ->
            this.map =map

            // Set the style after mapView was loaded
            map.setStyle(styleUrl){style->

                // Create a GeoJson Source from our feature.
                val geojsonSource = GeoJsonSource("dhaka-airport", feature)
                // Add the source to the style
                style.addSource(geojsonSource)

                // Add layer on map using the Geojson Source
                val layer = LineLayer("dhaka-airport-line", "dhaka-airport")
                    .withProperties(
                        PropertyFactory.lineCap(Property.LINE_CAP_SQUARE),
                        PropertyFactory.lineJoin(Property.LINE_JOIN_MITER),
                        PropertyFactory.lineOpacity(1.0f),
                        PropertyFactory.lineWidth(5f),
                        PropertyFactory.lineColor("#0094ff")
                    )

                val filllayer = FillLayer("dhaka-airport-fill", "dhaka-airport")
                    .withProperties(
                        PropertyFactory.fillColor("#009fff"),
                        PropertyFactory.fillOpacity(0.5f)
                    )
                // Add the layer at the end
                style.addLayer(layer)
                style.addLayer(filllayer)
                //set camera on the layer
                map.moveCamera(CameraUpdateFactory.newLatLngZoom(LatLng( 23.845689, 90.393448), 14.0))

            }
        }
    }

    override fun onStart() {
        super.onStart()
        mapView.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapView.onResume()
    }

    override fun onPause() {
        super.onPause()
        mapView.onPause()
    }

    override fun onStop() {
        super.onStop()
        mapView.onStop()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapView.onLowMemory()
    }

    override fun onDestroy() {
        super.onDestroy()
        mapView.onDestroy()
    }

}
```

## Current Location
Check out this code to view current location in the map 
```kotlin 

import android.Manifest
import android.content.pm.PackageManager
import android.graphics.Color
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Toast
import androidx.activity.result.contract.ActivityResultContracts
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.mapbox.mapboxsdk.Mapbox
import com.mapbox.mapboxsdk.location.LocationComponentActivationOptions
import com.mapbox.mapboxsdk.location.LocationComponentOptions
import com.mapbox.mapboxsdk.location.engine.LocationEngineRequest
import com.mapbox.mapboxsdk.location.modes.CameraMode
import com.mapbox.mapboxsdk.maps.MapView
import com.mapbox.mapboxsdk.maps.MapboxMap
import com.mapbox.mapboxsdk.maps.Style

class LocationMapActivity : AppCompatActivity() {

    private lateinit   var map: MapboxMap
    private lateinit var mapView: MapView
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Mapbox.getInstance(this)
        setContentView(R.layout.activity_location_map)

        //map style name for style link
        val styleId = "osm-liberty"

        // get the api key from barikoi developer panel https://developer.barikoi.com
        val apiKey = getString(R.string.barikoi_api_key)

        // Build the style URL
        val styleUrl = "https://map.barikoi.com/styles/$styleId/style.json?key=$apiKey"

        // Create map view
        mapView= findViewById(R.id.mapView)
        mapView.onCreate(savedInstanceState)
        mapView.getMapAsync { map ->
            this.map =map

            // Set the style after mapView was loaded
            map.setStyle(styleUrl){style->
                //check if location permissions are allowed
                if(checkLocationPermission()){
                    //if location permission allowed, set current location layer on map
                    setMapcurrentLocationLayer()
                }else{
                    //location permission denied, request permission
                    requestLocationPermission()
                }


            }



        }
    }
    //Function to set current location icon layer in map
    private fun setMapcurrentLocationLayer(){

        //Check if app has location permission , if not, need to add code for permission handling
        if (ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_FINE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(
                this,
                Manifest.permission.ACCESS_COARSE_LOCATION
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            // TODO: Consider calling
            //    ActivityCompat#requestPermissions
            // here to request the missing permissions, and then overriding
            //   public void onRequestPermissionsResult(int requestCode, String[] permissions,
            //                                          int[] grantResults)
            // to handle the case where the user grants the permission. See the documentation
            // for ActivityCompat#requestPermissions for more details.
            return
        }
        map.let { it ->
            val locationComponent = it.locationComponent
            val locationComponentOptions =
                LocationComponentOptions.builder(this@LocationMapActivity)
                    .pulseEnabled(true)     // adds pulse effect on current location point
                    .bearingTintColor(Color.RED)
                    .compassAnimationEnabled(true)
                    .build()

            it.style?.let {
                val locationComponentActivationOptions =
                    buildLocationComponentActivationOptions(it, locationComponentOptions)
                locationComponent.activateLocationComponent(locationComponentActivationOptions)
                locationComponent.isLocationComponentEnabled = true
                locationComponent.cameraMode = CameraMode.TRACKING_GPS

            }
        }

    }


    private fun buildLocationComponentActivationOptions(
        style: Style,
        locationComponentOptions: LocationComponentOptions
    ): LocationComponentActivationOptions {
        return LocationComponentActivationOptions
            .builder(this, style)
            .locationComponentOptions(locationComponentOptions)
            .useDefaultLocationEngine(true)
            .locationEngineRequest(
                LocationEngineRequest.Builder(750)
                    .setFastestInterval(750)
                    .setPriority(LocationEngineRequest.PRIORITY_HIGH_ACCURACY)
                    .build()
            )
            .build()
    }

    private fun checkLocationPermission(): Boolean{

        return ContextCompat.checkSelfPermission(
            this,
            Manifest.permission.ACCESS_FINE_LOCATION
        ) == PackageManager.PERMISSION_GRANTED

    }

    //Function to request location permission
    private fun requestLocationPermission(){
        val locationPermissionRequest = registerForActivityResult(
            ActivityResultContracts.RequestMultiplePermissions()
        ) { permissions ->
            when {
                permissions.getOrDefault(Manifest.permission.ACCESS_FINE_LOCATION, false) -> {
                    //after permission granted, set current location layer in map
                    setMapcurrentLocationLayer()
                }
                permissions.getOrDefault(Manifest.permission.ACCESS_COARSE_LOCATION, false) -> {
                    // Only approximate location access granted.
                    setMapcurrentLocationLayer()
                } else -> {
                // No location access granted.
                Toast.makeText(this, "Location permission denied, cannot get nearby places", Toast.LENGTH_LONG).show()
            }
            }
        }

// ...

// Before you perform the actual permission request, check whether your app
// already has the permissions, and whether your app needs to show a permission
// rationale dialog. For more details, see Request permissions.
        locationPermissionRequest.launch(arrayOf(
            Manifest.permission.ACCESS_FINE_LOCATION,
            Manifest.permission.ACCESS_COARSE_LOCATION))
    }

    override fun onStart() {
        super.onStart()
        mapView.onStart()
    }

    override fun onResume() {
        super.onResume()
        mapView.onResume()
    }

    override fun onPause() {
        super.onPause()
        mapView.onPause()
    }

    override fun onStop() {
        super.onStop()
        mapView.onStop()
    }

    override fun onLowMemory() {
        super.onLowMemory()
        mapView.onLowMemory()
    }

    override fun onDestroy() {
        super.onDestroy()
        mapView.onDestroy()
    }
}
```
