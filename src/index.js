function refreshWeather (response) {
    let temperatureElement = document.querySelector(".weather-app-temperature");
    let temperature = response.data.temperature.current;

     temperatureElement.innerHTML = Math.round(temperature);
    
}

function searchCity(city) {
    let apiKey = "tb5d3da1bc2d33bb290609f0935457o7 ";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit (event) {
    event.preventDefault();
    let searchInput = document.querySelector ("#search-form-input")
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector ("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit); 
