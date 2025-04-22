async function getWeather(city) {
    const API_KEY = 'ec91326f00df715a052952770a8d8cc5';
    const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(`Temperature: ${data.main.temp}`);
    console.log(`Humidity: ${data.main.humidity}`);
    console.log(`Weather: ${data.weather[0].description}`);
 }
 
 const city = 'Mumbai';  // Replace with the city you want to get the weather for
 getWeather(city);