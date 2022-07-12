


/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

// API_KEY for maps api


/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '973865b941mshf6629a17acf3885p1df428jsn5e6998c63ecc',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
};

return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
	.then(response => response.json())
	.then(data => data)
	.catch(err => console.error(err));
  //HINT: Use template literals to create a url with input and an API key
  
  //CODE GOES HERE
}

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = async() => {
  const city = document.getElementById('city-input').value;
  const weatherData= await getWeatherData(city)
  showWeatherData(weatherData)

}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  const cityNameDiv=document.getElementById('city-name')
  const weatherTypeDiv=document.getElementById('weather-type')
  const tempDiv=document.getElementById('temp')
  const minTempDiv=document.getElementById('min-temp')
  const maxTempDiv=document.getElementById('max-temp')
   console.log(weatherData)
  cityNameDiv.innerHTML=weatherData.name
 weatherTypeDiv.innerHTML=weatherData.weather[0].main
   tempDiv.innerHTML=weatherData.main.temp
  minTempDiv.innerHTML=weatherData.main.temp_min
  maxTempDiv.innerHTML=weatherData.main.temp_max
}


