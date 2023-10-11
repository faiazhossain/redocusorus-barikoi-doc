---
id: "QuickStart"
title: "QuickStart"
sidebar_label: "QuickStart"
sidebar_position: 1
---

To implement Barikoi map in you android app, we recommend using Maplibre Android SDK as it is quick and easy to install and use with Barikoi maps. 

### Prerequisite
For this example you will need: 
1. A Barikoi API key, which you can get in [Developer Dashboard](http://developer.barikoi.com "Developer Dashboard")
2. Knowledge in Kotlin/java
3. Barikoi map style 
   
### Get Dependencies
Add bintray Maven repositories to your project-level Gradle file (usually {project}/{app-module}/build.gradle).

```kotlin
allprojects {
    repositories {
    ...
    mavenCentral()
    }
}
```

Then add the dependency in your dependencies { ... }:
```kotlin
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
