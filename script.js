
function fetchWeather() {
  // enter your api key here
  var apikey = 'PASTE YOUR API KEY HERE';
  var searchText = document.querySelector('#search-bar').value;
  console.log(searchText);

const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apikey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      
     var weatherDescription = weather[0]["description"];
     var modStr = weatherDescription[0].toUpperCase() + weatherDescription.slice(1);


      document.getElementById('icon').src = icon;
      document.getElementById('city').textContent = name;
      document.getElementById('temp').textContent =  "Temperature: " + main.temp + "°C";
      document.getElementById('humidity').textContent = "Humidity: " + main.humidity + "%";
      document.getElementById('weather').textContent = "Description: " + modStr;
     // document.getElementById('sys').textContent = sys.country + ",";
    });
  }
   
  document.querySelector('#search-button').addEventListener('click', fetchWeather);

  document.querySelector('#search-bar').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      fetchWeather();
    }
  });
