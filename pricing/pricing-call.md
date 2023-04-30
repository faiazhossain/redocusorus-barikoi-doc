---
id: pricing-call
title: API usage and pricing clarification
---

A single API request and a single API call are not always the same. A single API request to the server might call multiple APIs. An API might depend on other internal APIs to deliver the desired response. The number of call depends on the number of parameters of a request and the number of internal API calls needed to make to provide the desired response. For instance, A single request to Rupantor API results in two API calls since Rupantor API uses geocode API to operate. Routing API follows the same formalities as Rupantor.

# API call count for each request

<!-- details for reverse geocode api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Reverse Geocode API</summary>  
  <table>
  
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| Post_code    | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| country      | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| sub_district | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |

  </td>
  <td></td>
  <td>

| Parameter     | Call count                                                 |
| ------------- | ---------------------------------------------------------- |
| address       | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| Union         | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| Pouroshova    | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| location_type | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| division      | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                                                 |
| ----------- | ---------------------------------------------------------- |
| area        | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| post_office | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span>                   |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| match       | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  </tr> 
</table>

</details>

<!-- details for reverse geocode api server -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Reverse Geocode API(server)</summary>  
  <table>
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| Post_code    | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| country      | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| sub_district | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |

  </td>
  <td></td>
  <td>

| API           | Call count                                                 |
| ------------- | ---------------------------------------------------------- |
| address       | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| Union         | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| Pouroshova    | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| location_type | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| division      | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                                                 |
| ----------- | ---------------------------------------------------------- |
| area        | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| post_office | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span>                   |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| match       | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  </tr> 
</table>

</details>

<!-- details for geocoding api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Geocoding API</summary>  
  <table>
  
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| API           | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                               |
| ----------- | ---------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span> |
| post_office | <span style={{color:"#9e9e9e"}}>0</span> |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span> |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span> |
| match       | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>
  </tr> 
</table>

</details>

<!-- details for Autocomplete api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Autocomplete API</summary>  
  <table>
  
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| API           | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                               |
| ----------- | ---------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span> |
| post_office | <span style={{color:"#9e9e9e"}}>0</span> |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span> |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span> |
| match       | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>
  </tr> 
</table>

</details>

<!-- details for Autocomplete api with city filter -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Autocomplete API with city filter</summary>  
  <table>
  
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| API           | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                               |
| ----------- | ---------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span> |
| post_office | <span style={{color:"#9e9e9e"}}>0</span> |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span> |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span> |
| match       | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>
  </tr> 
</table>

</details>

<!-- details for Postoffice autocomplete api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Post Office autocomplete API</summary>  
  <table>
  
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| API           | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                                                 |
| ----------- | ---------------------------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span>                   |
| post_office | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span>                   |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| match       | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  </tr> 
</table>

</details>

<!-- details for Industrial autocomplete api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Industrial autocomplete API</summary>  
  <table>
  
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| API           | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                               |
| ----------- | ---------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span> |
| post_office | <span style={{color:"#9e9e9e"}}>0</span> |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span> |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span> |
| match       | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>
  </tr> 
</table>

</details>

<!-- details for Bangla autocomplete api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Bangla autocomplete API</summary>  
  <table>
  
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| API           | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                               |
| ----------- | ---------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span> |
| post_office | <span style={{color:"#9e9e9e"}}>0</span> |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span> |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span> |
| match       | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>
  </tr> 
</table>

</details>

<!-- details for Distance api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Distance API</summary>  
  <table>
  
  <tr>
  <td>

| Parameter    | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| District     | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| Parameter     | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| Parameter   | Call count                               |
| ----------- | ---------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span> |
| post_office | <span style={{color:"#9e9e9e"}}>0</span> |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span> |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span> |
| match       | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>
  </tr> 
</table>

</details>

<!-- details for Rupantor geocoder api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Rupantor geocoder API</summary>  
  <table>
  
  <tr>
  <td>

| API          | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>2</span> |
| District     | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| API           | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| API         | Call count                                                 |
| ----------- | ---------------------------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span>                   |
| post_office | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Thana       | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| bangla      | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |
| match       | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  </tr> 
</table>

</details>

<!-- details for Rupantor address match api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Rupantor address match API</summary>  
  <table>
  
  <tr>
  <td>

| API          | Call count                                                 |
| ------------ | ---------------------------------------------------------- |
| Base Count   | <span style={{color:"#654E92",fontWeight:"bold"}}>2</span> |
| District     | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Post_code    | <span style={{color:"#9e9e9e"}}>0</span>                   |
| country      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| sub_district | <span style={{color:"#9e9e9e"}}>0</span>                   |

  </td>
  <td></td>
  <td>

| API           | Call count                               |
| ------------- | ---------------------------------------- |
| address       | <span style={{color:"#9e9e9e"}}>0</span> |
| Union         | <span style={{color:"#9e9e9e"}}>0</span> |
| Pouroshova    | <span style={{color:"#9e9e9e"}}>0</span> |
| location_type | <span style={{color:"#9e9e9e"}}>0</span> |
| division      | <span style={{color:"#9e9e9e"}}>0</span> |

  </td>

  <td></td>
  <td>

| API         | Call count                                                 |
| ----------- | ---------------------------------------------------------- |
| area        | <span style={{color:"#9e9e9e"}}>0</span>                   |
| post_office | <span style={{color:"#9e9e9e"}}>0</span>                   |
| Thana       | <span style={{color:"#9e9e9e"}}>0</span>                   |
| bangla      | <span style={{color:"#9e9e9e"}}>0</span>                   |
| match       | <span style={{color:"#654E92",fontWeight:"bold"}}>1</span> |

  </td>
  </tr> 
</table>

</details>
<small style={{fontSize:"10px"}}>Note: Custom API 50 paisa per API call.</small>
