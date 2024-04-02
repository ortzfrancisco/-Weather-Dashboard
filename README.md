
Weather Dashboard
Description
This project was created for users who want to know the current weather for a specific city as well as the five day forecast for that city. The site utilizes three APIs provided by OpenWeather to locate the searched city's longitude and latitude, current weather, and future forecasts. The project was designed utilizing Bootstrap and jQuery.

Installation
N/A

Usage
In the search text box, enter the name of a city within the United States of America you wish to find the weather for. An alert with pop up if the city cannot be located by the name.

Once a valid city has been entered, the current weather data (including conditions,temperature, wind, and humidity) will display in the main area of the page. Below the current weather, five blue boxes will display the future weather conditions for the next 5 days. The temps displayed in the 5-day forecast are the anticipated high temps for that specific day. (Below is an example search done on a mobile device.)

Note: Some searches will return the nearest city with weather data in relation to the user's searched city. For example, searching Stowe, VT will return weather data for Morristown, VT

After every successful city search, a grey button with that city's name will appear below the search area. Clicking this button will redisplay that city's weather data in the main area of the site. The city buttons are based on localStorage values and will save up to 10 cities at a time. Once more than 10 cities have been saved, the oldest searched city will be removed, and the rest of the cities will cascade in its place.

Credit
Github user erikflowers: Weather Icons

OpenWeather APIs:

Geocoding API
Current Weather Data API
5 Day Weather Forecast API
License
Please refer to the LICENSE in the repo.
