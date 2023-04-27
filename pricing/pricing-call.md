---
id: pricing-call
title: API usage and pricing clarification
---

A single API request and a single API call are not always the same. A single API request to the server might call multiple APIs. An API might depend on other internal APIs to deliver the desired response. The number of call depends on the number of parameters of a request and the number of internal API calls needed to make to provide the desired response. For instance, A single request to Rupantor API results in two API calls since Rupantor API uses geocode API to operate. Routing API follows the same formalities as Rupantor.

# Api Call Count For Each Request

| Api                                                                                                                | Base Count | District | post_code | country | sub_district | union | pauroshova | location_type | division | address | area | post_office | thana | bangla | match |
| ------------------------------------------------------------------------------------------------------------------ | :--------: | :------: | :-------: | :-----: | :----------: | :---: | :--------: | :-----------: | :------: | :-----: | :--: | :---------: | :---: | :----: | :---: |
| [Reverse Geocode API](https://docs.barikoi.com/docs/rev-geo/)                                                      |     1      |    1     |     1     |    1    |      1       |   1   |     1      |       1       |    1     |    1    |  1   |             |       |        |       |
| [Reverse Geocoding (Server) API](https://docs.barikoi.com/docs/geo-server/)                                        |     1      |    1     |     1     |    1    |      1       |   1   |     1      |       1       |    1     |    1    |  1   |             |       |        |       |
| [Geocoding API](https://docs.barikoi.com/docs/geo-code/)                                                           |     1      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |
| [Autocomplete API](https://docs.barikoi.com/docs/autocomplete/)                                                    |     1      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |
| [Autocomplete API With City Filter](https://docs.barikoi.com/docs/autocomplete/#autocomplete-api-with-city-filter) |     1      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |
| [Post Ofiice Autocomplete API](https://docs.barikoi.com/docs/autocomplete/#post-office-autocomplete-api)           |     1      |          |           |         |              |       |            |               |          |         |      |      1      |       |        |       |
| [Industrial Autocomplete API](https://docs.barikoi.com/docs/autocomplete/#industrial-autocomplete-api)             |     1      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |
| [Bangla Autocomplete API](https://docs.barikoi.com/docs/autocomplete/#bangla-autocomplete-api)                     |     1      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |
| [Distance API](https://docs.barikoi.com/docs/distance/)                                                            |     1      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |
| [Rupantor Geocoder API](https://docs.barikoi.com/docs/rupantor-geocoder/)                                          |     2      |    1     |           |         |              |       |            |               |          |         |      |             |   1   |   1    |       |
| [Rupantor Address Match API](https://docs.barikoi.com/docs/rupantor-geocoder/#rupantor-address-match)              |     2      |          |           |         |              |       |            |               |          |         |      |             |       |        |   1   |
| [Routing API](https://docs.barikoi.com/docs/route-api/)                                                            |     2      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |
| [Route Optimization API](https://docs.barikoi.com/docs/route-api/#post-route-optimization)                         |     1      |          |           |         |              |       |            |               |          |         |      |             |       |        |
| [Nearest API](https://docs.barikoi.com/docs/route-api/#get-nearest)                                                |     2      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |
| [Route Match API](https://docs.barikoi.com/docs/route-api/#get-route-match)                                        |     2      |          |           |         |              |       |            |               |          |         |      |             |       |        |       |

<small style={{fontSize:"10px"}}>Note: Custom API 50 paisa per API call.</small>
