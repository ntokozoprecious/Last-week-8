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
 function displayForecast (){
    let forecastElement = document.querySelector("forecast");

    let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
    let forecastHtml = "";
    days.forEach(function (day) {
        forecastHtml = 
        forecastHtml +
        ` 
        <ul>
         <div class="weather-forecast">
                            <div class="row">
                                <div class="col-2">
                                <div class="weather-forecast-date">
                                    Thu
                                    </div>
                                </br>
                                <div class="weather-forecast-icon">⛅</div>
                                    <div class="weather-forecast-temperatures">
                                    <div class="weather-forecast-temperature">
                                    
                                    </br>
                                    15 9 

                                          </div>
                                    </div>
                                    </div>
                                    </div>
                                    </ul>
                                    `;
    });

    forecastElement.innerHTML = forecastHtml;
 }

 
let searchFormElement = document.querySelector ("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit); 

displayForecast ();

