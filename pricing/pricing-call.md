---
id: pricing-call
title: API usage and pricing clarification
---

<head>
  <title>Barikoi Documentation</title>
</head>

# General information about our pricing

Our pricing is subscription based. You can purchase a plan that fits your requirements which implies a monthly fee. We offer a number of plans out of the box. You can find an overview about these plan on our pricing page. If none of these plans fit your requirements, you probably need a custom plan that you need to negotiate with us directly. Please contact us in this case. When you purchase a plan, you purchase both request limits (in terms of maximum locations and vehicles) and a number of daily calls. calls are Barikoi's currency, i.e. you can spend these calls for whatever API you like. However, costs for each request are dependent on the API you use. To understand the differences, we recommend you to read "What is one call?".

# API usage and pricing clarification

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

<!-- details for reverse Geocoding api server -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Reverse Geocoding API(server)</summary>  
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

<!-- details for Routing api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Routing API</summary>  
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

| API         | Call count                               |
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

<!-- details for Route optimization api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Route optimization API</summary>  
  <table>
  
  <tr>
  <td>

| API          | Call count                                                 |
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

| API         | Call count                               |
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

<!-- details for Nearest api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Nearest API</summary>  
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

| API         | Call count                               |
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

<!-- details for Route Match api -->
<details style={{backgroundColor:"#ECF2FF", color:"black"}}>
  <summary>Route Match API</summary>  
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

| API         | Call count                               |
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

<small style={{fontSize:"10px"}}>Note: Custom API <span style={{fontWeight:"bold",fontSize:'.8rem', color:"#654E92"}}>50 paisa</span> per API call.</small>

# What happens when i go over the call limit

If you go over the daily/monthly call limit your API key will not stop working immediately and you'll get an Email. If this happens frequently, we'll contact you to discuss this. If you go far beyond this daily limit then there is a hard limit to protect our platform from abuse.

Please note that there is also a (permissive) minutely call limit specified in our documentation, which is not reported via Email. If that limit is exceeded you get a bad request (http code 429) and need to delay you requests or buy a bigger package. Currently, this is also a soft limit and we block requests only if you go too much beyond it.

# Billing Cycle

Default billing cycle start from the day an API key is generated and billed 29 days from the API generation date. The cycle is changeable according to users convenience.
