// Function to handle search form submission
function handleSearch(event) {
  event.preventDefault();

  // Get the city name from the form input
  var cityName = document.querySelector('#search-input').value;

  // Call the function to get and display the current weather
  getCurrentWeather(cityName);

  // Call the function to get and display the 5-day forecast
  getForecast(cityName);

  // Add the city to the search history
  addToHistory(cityName);
}

// Function to get and display the current weather
function getCurrentWeather(cityName) {
  // Make API call to get current weather
  fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      // Display the weather data in the current weather section
      // You'll need to add code here to display the data in your HTML
      var weatherHTML = `
        < h2 > ${data.name} (${new date().tolocaldatestring()})</h2 >
        <p>Temperature: ${data.main.temp}°F</p>
        <p>humidity: ${data.main.humidity}%</p>
        <p>Wind speed: ${data.wind.speed} MPH</p>
  `;
      document.querySelector('#currrent-weather').innerHTML = weatherHTML;
    console.log(data);
    })
    .catch(error => console.error('Error:', error));
}


// Function to get and display the 5-day forecast
function getForecast(cityName) {
  // Make API call to get 5-day forecast
  fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=YOUR_API_KEY')
    .then(response => response.json())
    .then(data => {
      // Display the forecast data in the forecast section
      var forecastHTML = '<h2>5-day forecast:</h2>';
      data.list.forEach((forecast, index) => {
        if (index % 8 === 0) {
          forecastHTML += `
          <div>
          <h3>${new Date(forcast.dt_txt).toLocaleDateString()}</he>
          <p>Temp: ${forecast.main.temp}°F</p>
          <p>humidity: ${forecast.main.humidity}%</p>
          </div>
          `;
        }
      });
      document.querySelector('#forecast').innerHTML = forecastHTML;
      console.log(data);
    })
    .catch(error => console.error('error:', error));
}

// Function to add a city to the search history
function addToHistory(cityName) {
  // get the current search history from local storage
  var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];

  // Add the city to the search history in localStorage
  if (!searchHistory.includes(cityName)) {
    searchHistory.push(cityName);
  }
  // Update the displayed search history
  function updateSearchHistory() {
    var searchHistory = JSON.parse(localStorage.getItem('#search-History'));
    historyElement.innerHTML = '';
    searchHistory.forEach(city => {
      var cityElement = document.createElement('li');
      cityElement.textContent = city;
      cityElement.appendChild(cityElement);
    });
    document.querySelector('#history').innerHTML = historyHTML;
  }
}

// Event listener for search form submission
document.querySelector('#search-form').addEventListener('submit', function(event){
event.preventeDefault();
var cityName = document.querySelector('#city-input').value;
getCurrentWeather(cityName);
getForecast(cityName);
addToHistory(cityName);
updateSearchHistory();
});

// Event listener for clicking on a city in the search history
document.querySelector('#search-history').addEventListener('click', function (event) {
  if (event.target.matches('button')) {
    var cityName = event.target.getAttribute('data-city');
    getCurrentWeather(cityName);
    getForecast(cityName);
  }
});