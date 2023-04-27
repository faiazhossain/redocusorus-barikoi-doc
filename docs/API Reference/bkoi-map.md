---
sidebar_label: "Map"
sidebar_position: 1
---

# Map

<strong style={{color:"#6B7C92;"}}>Extends Evented</strong>

The <span style={{color:"#e83e8c"}}>Map</span> object represents the map on your page. It exposes methods and properties that enable you to programmatically change the map, and fires events as users interact with it.

You create a <span style={{color:"#e83e8c"}}>Map</span> by specifying a container and other options. Then Bkoi GL JS initializes the map on the page and returns your <span style={{color:"#e83e8c"}}>Map</span> object.

# Parameters

- <span style={{color:"#e83e8c"}}>options</span> [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

  - <span style={{color:"#e83e8c"}}>options.container</span>([HTMLElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)) The HTML element in which Bkoi GL JS will render the map, or the element’s string <span style={{color:"#e83e8c"}}>id</span>. The specified element must have no children.

  - <span style={{color:"#e83e8c"}}>options.minZoom</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The minimum zoom level of the map (0-24). (optional, default 0)

  - <span style={{color:"#e83e8c"}}>options.maxZoom</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The maximum zoom level of the map (0-24). (optional, default 22)

  - <span style={{color:"#e83e8c"}}>options.minPitch</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The minimum pitch level of the map (0-60). (optional, default 0)

  - <span style={{color:"#e83e8c"}}>options.maxPitch</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The minimum pitch level of the map (0-60). (optional, default 60)

  - <span style={{color:"#e83e8c"}}>options.style</span> ([Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))? The map’s Map style. This must be an a JSON object conforming to the schema described in the Map Style Specification, or a URL to such JSON.To load a style from the Map API, you can use a URL of the form map://styles/:owner/:style, where :owner is your Map account name and :style is the style ID. Or you can use one of the following the predefined Map styles:-
    <br/>
    <span style={{color:"#e83e8c"}}>map://styles/map/streets-v11</span>
    - <span style={{color:"#e83e8c"}}>map://styles/map/outdoors-v11</span>

  <!-- - <span style={{color:"#e83e8c"}}>options.styleType</span> (string | 'light' | 'dark')? The map's predefined style types. Note that the <span style={{color:"#e83e8c"}}>style</span> prop will get precedence over <span style={{color:"#e83e8c"}}>styleType</span>. If any invalid value is provided, <span style={{color:"#e83e8c"}}>'light'</span> style type will be picked as fallback. -->

  - <span style={{color:"#e83e8c"}}>options.container</span>([boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)) If <span style={{color:"#e83e8c"}}>true</span>, the map’s position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page’s URL. For example, http://path/to/my/page.html#2.59/39.26/53.07/-24.1/60. An additional string may optionally be provided to indicate a parameter-styled hash, e.g. http://path/to/my/page.html#map=2.59/39.26/53.07/-24.1/60&foo=bar, where foo is a custom parameter and bar is an arbitrary hash distinct from the map hash. (optional, default <span style={{color:"#e83e8c"}}>false</span>)

  - <span style={{color:"#e83e8c"}}>options.interactive</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>false</span>, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.bearingSnap</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The threshold, measured in degrees, that determines when the map’s bearing will snap to north. For example, with a <span style={{color:"#e83e8c"}}>bearingSnap</span> of 7, if the user rotates the map within 7 degrees of north, the map will automatically snap to exact north. (optional, default <span style={{color:"#e83e8c"}}>7</span>)

  - <span style={{color:"#e83e8c"}}>options.pitchWithRotate</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>false</span>, the map’s pitch (tilt) control with “drag to rotate” interaction will be disabled. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.clickTolerance</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The max number of pixels a user can shift the mouse pointer during a click for it to be considered a valid click (as opposed to a mouse drag). (optional, default <span style={{color:"#e83e8c"}}>3</span>)

  - <span style={{color:"#e83e8c"}}>options.attributionControl</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, an AttributionControl will be added to the map. (optional, default <span style={{color:"#e83e8c"}}>true</span>)
  - <span style={{color:"#e83e8c"}}>options.customAttribution</span> ([string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) | [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<string/>)? String or strings to show in an AttributionControl. Only applicable if <span style={{color:"#e83e8c"}}>options.attributionControl is true.</span>

  - <span style={{color:"#e83e8c"}}>options.logoPosition</span> [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) A string representing the position of the Map wordmark on the map. Valid options are <span style={{color:"#e83e8c"}}>top-left</span>,<span style={{color:"#e83e8c"}}>top-right</span>, <span style={{color:"#e83e8c"}}>bottom-left</span>, <span style={{color:"#e83e8c"}}>bottom-right</span>. (optional, default <span style={{color:"#e83e8c"}}>'bottom-left'</span>)

  - <span style={{color:"#e83e8c"}}>options.failIfMajorPerformanceCaveat</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, map creation will fail if the performance of Bkoi GL JS would be dramatically worse than expected (i.e. a software renderer would be used). (optional, default <span style={{color:"#e83e8c"}}>false</span>)

  - <span style={{color:"#e83e8c"}}>options.preserveDrawingBuffer</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, the map’s canvas can be exported to a PNG using <span style={{color:"#e83e8c"}}>map.getCanvas().toDataURL()</span>. This is false by default as a performance optimization. (optional, default <span style={{color:"#e83e8c"}}>false</span>)

  - <span style={{color:"#e83e8c"}}>options.antialias</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)? If <span style={{color:"#e83e8c"}}>true</span>, the gl context will be created with MSAA antialiasing, which can be useful for antialiasing custom layers. this is <span style={{color:"#e83e8c"}}>false</span> by default as a performance optimization.

  - <span style={{color:"#e83e8c"}}>options.refreshExpiredTiles</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>false</span>, the map won’t attempt to re-request tiles once they expire per their HTTP <span style={{color:"#e83e8c"}}>cacheControl</span>/<span style={{color:"#e83e8c"}}>expires</span> headers. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.maxBounds</span> <strong>LngLatBoundsLike?</strong> If set, the map will be constrained to the given bounds.

  - <span style={{color:"#e83e8c"}}>options.scrollZoom</span> ([boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)) If <span style={{color:"#e83e8c"}}>true</span>, the “scroll to zoom” interaction is enabled. An <span style={{color:"#e83e8c"}}>Object</span> value is passed as options to ScrollZoomHandler#enable. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.boxZoom</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, the “box zoom” interaction is enabled (see BoxZoomHandler). (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.dragRotate</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, the “drag to rotate” interaction is enabled (see DragRotateHandler). (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.dragPan</span> ([boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)) If <span style={{color:"#e83e8c"}}>true</span>, the “drag to pan” interaction is enabled. An <span style={{color:"#e83e8c"}}>Object</span> value is passed as options to DragPanHandler#enable. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.keyboard</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, keyboard shortcuts are enabled (see KeyboardHandler). (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.doubleClickZoom</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, the “double click to zoom” interaction is enabled (see DoubleClickZoomHandler). (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.touchZoomRotate</span> ([boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)) If <span style={{color:"#e83e8c"}}>true</span>, the “pinch to rotate and zoom” interaction is enabled. An <span style={{color:"#e83e8c"}}>Object</span> value is passed as options to TouchZoomRotateHandler#enable. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.touchPitch</span> ([boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)) If <span style={{color:"#e83e8c"}}>true</span>, the “drag to pitch” interaction is enabled. An <span style={{color:"#e83e8c"}}>Object</span> value is passed as options to TouchPitchHandler#enable. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.trackResize</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, the map will automatically resize when the browser window resizes. (optional, default <span style={{color:"#e83e8c"}}>true</span>

  - <span style={{color:"#e83e8c"}}>options.center</span> <strong>LngLatLike</strong> The inital geographical centerpoint of the map. If <span style={{color:"#e83e8c"}}>center</span> is not specified in the constructor options, Bkoi GL JS will look for it in the map’s style object. If it is not specified in the style, either, it will default to <span style={{color:"#e83e8c"}}>[0, 0]</span> Note: Bkoi GL uses longitude, latitude coordinate order (as opposed to latitude, longitude) to match GeoJSON. (optional, default <span style={{color:"#e83e8c"}}>[0, 0]</span>))

  - <span style={{color:"#e83e8c"}}>options.zoom</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The initial zoom level of the map. If zoom is not specified in the constructor options, Bkoi GL JS will look for it in the map’s style object. If it is not specified in the style, either, it will default to <span style={{color:"#e83e8c"}}>0</span>. (optional, default <span style={{color:"#e83e8c"}}>0</span>)

  - <span style={{color:"#e83e8c"}}>options.bearing</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The initial bearing (rotation) of the map, measured in degrees counter-clockwise from north. If <span style={{color:"#e83e8c"}}>bearing</span> is not specified in the constructor options, Bkoi GL JS will look for it in the map’s style object. If it is not specified in the style, either, it will default to <span style={{color:"#e83e8c"}}>0</span>. (optional, default <span style={{color:"#e83e8c"}}>0</span>)

  - <span style={{color:"#e83e8c"}}>options.pitch</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The initial pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If <span style={{color:"#e83e8c"}}>pitch</span> is not specified in the constructor options, Bkoi GL JS will look for it in the map’s style object. If it is not specified in the style, either, it will default to <span style={{color:"#e83e8c"}}>0</span>. (optional, default <span style={{color:"#e83e8c"}}>0</span>)

  - <span style={{color:"#e83e8c"}}>options.bounds</span> <strong>LngLatBoundsLike?</strong> The initial bounds of the map. If <span style={{color:"#e83e8c"}}>bounds</span> is specified, it overrides <span style={{color:"#e83e8c"}}>center</span> and <span style={{color:"#e83e8c"}}>zoom</span> constructor options.

  - <span style={{color:"#e83e8c"}}>options.fitBoundsOptions</span> [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)? A Map#fitBounds options object to use only when fitting the initial <span style={{color:"#e83e8c"}}>bounds</span> provided above.

  - <span style={{color:"#e83e8c"}}>options.renderWorldCopies</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, multiple copies of the world will be rendered side by side beyond -180 and 180 degrees longitude. If set to <span style={{color:"#e83e8c"}}>false</span>:- When the map is zoomed out far enough that a single representation of the world does not fill the map’s entire container, there will be blank space beyond 180 and -180 degrees longitude.

    - Features that cross 180 and -180 degrees longitude will be cut in two (with one portion on the right edge of the map and the other on the left edge of the map) at every zoom level. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.maxTileCacheSize</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) The maximum number of tiles stored in the tile cache for a given source. If omitted, the cache will be dynamically sized based on the current viewport. (optional, default <span style={{color:"#e83e8c"}}>null</span>)

  - <span style={{color:"#e83e8c"}}>options.localIdeographFontFamily</span> [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) Defines a CSS font-family for locally overriding generation of glyphs in the ‘CJK Unified Ideographs’, ‘Hiragana’, ‘Katakana’ and ‘Hangul Syllables’ ranges. In these ranges, font settings from the map’s style will be ignored, except for font-weight keywords (light/regular/medium/bold). Set to <span style={{color:"#e83e8c"}}>false</span>, to enable font settings from the map’s style for these glyph ranges. Note that Map Studio sets this value to <span style={{color:"#e83e8c"}}>false</span> by default. The purpose of this option is to avoid bandwidth-intensive glyph server requests. (See Use locally generated ideographs.) (optional, default <span style={{color:"#e83e8c"}}>'sans-serif'</span>)

  - <span style={{color:"#e83e8c"}}>options.transformRequest</span> <strong>RequestTransformFunction</strong> A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests. Expected to return an object with a <span style={{color:"#e83e8c"}}>url</span> property and optionally <span style={{color:"#e83e8c"}}>headers</span> and <span style={{color:"#e83e8c"}}>credentials</span> properties. (optional, default <span style={{color:"#e83e8c"}}>url</span>)

  - <span style={{color:"#e83e8c"}}>options.collectResourceTiming</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, Resource Timing API information will be collected for requests made by GeoJSON and Vector Tile web workers (this information is normally inaccessible from the main Javascript thread). Information will be returned in a <span style={{color:"#e83e8c"}}>resourceTiming</span> property of relevant <span style={{color:"#e83e8c"}}>data</span> events. (optional, default <span style={{color:"#e83e8c"}}>false</span>)

  - <span style={{color:"#e83e8c"}}>options.fadeDuration</span> [number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) Controls the duration of the fade-in/fade-out animation for label collisions, in milliseconds. This setting affects all symbol layers. This setting does not affect the duration of runtime styling transitions or raster tile cross-fading. (optional, default <span style={{color:"#e83e8c"}}>300</span>)

  - <span style={{color:"#e83e8c"}}>options.crossSourceCollisions</span> [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) If <span style={{color:"#e83e8c"}}>true</span>, symbols from multiple sources can collide with each other during collision detection. If <span style={{color:"#e83e8c"}}>false</span>, collision detection is run separately for the symbols in each source. (optional, default <span style={{color:"#e83e8c"}}>true</span>)

  - <span style={{color:"#e83e8c"}}>options.locale</span> [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) A patch to apply to the default localization table for UI strings, e.g. control tooltips. The <span style={{color:"#e83e8c"}}>locale</span> object maps namespaced UI string IDs to translated strings in the target language; see <span style={{color:"#e83e8c"}}>src/ui/default_locale.js</span> for an example with all supported string IDs. The object may specify all UI strings (thereby adding support for a new translation) or only a subset of strings (thereby patching the default translation table). (optional, default <span style={{color:"#e83e8c"}}>null</span>)

# Example

```
const map = new bkoigl.Map({
    container: 'map',
    center: [ 90.3938010872331, 23.821600277500405 ],
    zoom: 12,
    style: 'https://map.barikoi.com/styles/barikoi-dark/style.json',
    maxZoom: 16,
    hash: true,
    transformRequest: (url, resourceType) => {
        if(resourceType === 'Source' && url.startsWith('http://myHost')) {
            return {
                url: url.replace('http', 'https'),
                headers: { 'my-custom-header': true},
                credentials: 'include'  // Include cookies for cross-origin requests
            }
        }
    }
})
```
