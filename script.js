// Current Temperature
function showTemperature(response) {
  let currentTemp = document.querySelector("#currentTemp");
  let temperature = Math.round(response.data.main.temp);
  currentTemp.innerHTML = temperature;

  document.querySelector("#searched-city").innerHTML = response.data.name;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector("#description").innerHTML = response.data.weather[0].main;
}

// Search for your City - Submit
function submitSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = document.querySelector("h1");
  city.innerHTML=`${searchInput.value}`;

  searchCity(`${searchInput.value}`);
}

// Find the City
function searchCity(city) {
  let apiKey = `60127c861398555d83daebe249ae66b4`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showTemperature);
}

// Search Location - Coordinates
function searchLocation(position) {
  let lon = position.coords.longitude;
  let lat = position.coords.latitude;
  let apiKey = `60127c861398555d83daebe249ae66b4`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(showTemperature);
}

// Current Location 
function currentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

// Celsius Temperature
function currentTempC(event) {
  event.preventDefault();
  let celTemp = document.querySelector(".temperature");
  celTemp.innerHTML=8;
}

// Far Temperature
function currentTempF(event) {
  event.preventDefault();
  let farTemp = document.querySelector(".temperature");
  farTemp.innerHTML=46;
}


let now = new Date();
let currentDate = document.querySelector("#date");

  let days = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let day = days[now.getDay()];
  let hours =  now.getHours();
  let minutes = now.getMinutes();

currentDate.innerHTML=`${day} ${hours}:${minutes}`;

let form = document.querySelector("#search-form");
form.addEventListener("submit", submitSearch);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", currentTempC)

let far = document.querySelector("#far");
far.addEventListener("click", currentTempF);

let button = document.querySelector("button");
button.addEventListener("click", currentLocation);
