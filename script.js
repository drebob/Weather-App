
document.querySelector('.search-button').addEventListener('click', function() {
  var searchText = document.querySelector('.search-bar').value;
  console.log(searchText);


const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=63ca47b3c4a7de243aa098f9ad8410b4
&units=metric`;


  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      document.getElementById('city').textContent = name + ",";
      document.getElementById('weather').textContent = weather[0]["description"] + ", ";
      document.getElementById('temp').textContent = main.temp + " degrees farenheit, ";
      document.getElementById('humidity').textContent = main.humidity + " humidity,";
      document.getElementById('sys').textContent = sys.country + ",";
    })


  });
   

