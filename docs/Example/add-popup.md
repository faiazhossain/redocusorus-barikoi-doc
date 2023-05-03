---
sidebar_label: "Add popup"
sidebar_position: 6
---

# Add popup

<iframe src="http://barikoi.com:8080/add-popup" width="100%" height="280px" frameborder="0" style={{border:"1px solid black"}} allowfullscreen></iframe>

##

Add Style

```css
#control {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 100;
}
```

Add Control <span style={{color:"#e83e8c"}}>button</span>

```html
<div id="control">
  <button id="add-remove-popup">Remove Popup</button>
</div>
```

Add <span style={{color:"#e83e8c"}}>Popup</span> and Remove <span style={{color:"#e83e8c"}}>Popup</span> to the map.

```JS
map.on('load', () => {
            // Add Popup
            const popup = new bkoigl.Popup({ focusAfterOpen: false })
            addPopup(popup)

            // Add Event Listener
            let isPopup = true
            const addPopupEl = document.getElementById('add-remove-popup')
            addPopupEl.onclick = () => {
                isPopup = !isPopup

                if(isPopup) {
                    addPopup(popup)
                    addPopupEl.innerHTML = 'Remove Popup'

                } else {
                    removePopup(popup)
                    addPopupEl.innerHTML = 'Add Popup'
                }
            }
        })

        // Add Popup
        function addPopup(popup) {
            popup.setLngLat([ 90.3938010872331, 23.821600277500405 ])
                .setHTML('<h3>Barikoi HQ</h3>')
                .addTo(map)
        }

        // Remove Popup
        function removePopup(popup) {
            popup.remove()
        }
```

# Full Source Code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.css"
    />
    <script src="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.js"></script>
    <style>
      body,
      #map {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }

      #control {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 8px;
        right: 8px;
        z-index: 100;
      }
    </style>
    <title>Add Popup</title>
  </head>
  <body>
    <div id="map"></div>
    <div id="control">
      <button id="add-remove-popup">Remove Popup</button>
    </div>

    <script>
      bkoigl.accessToken = "<Barikoi API Key>"; // required
      const map = new bkoigl.Map({
        container: "map",
        center: [90.3938010872331, 23.821600277500405],
        zoom: 12,
      });

      map.on("load", () => {
        // Add Popup
        const popup = new bkoigl.Popup({ focusAfterOpen: false });
        addPopup(popup);

        // Add Event Listener
        let isPopup = true;
        const addPopupEl = document.getElementById("add-remove-popup");
        addPopupEl.onclick = () => {
          isPopup = !isPopup;

          if (isPopup) {
            addPopup(popup);
            addPopupEl.innerHTML = "Remove Popup";
          } else {
            removePopup(popup);
            addPopupEl.innerHTML = "Add Popup";
          }
        };
      });

      // Add Popup
      function addPopup(popup) {
        popup
          .setLngLat([90.3938010872331, 23.821600277500405])
          .setHTML("<h3>Barikoi HQ</h3>")
          .addTo(map);
      }

      // Remove Popup
      function removePopup(popup) {
        popup.remove();
      }
    </script>
  </body>
</html>
```
