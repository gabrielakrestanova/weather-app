// Time
let now = new Date();
let currentDayTime = document.querySelector(".current-day-time");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Sunday",
];
let day = now.getDay();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let currentDate = ` ${days[day]} ${hour}:${minutes}`;
currentDayTime.innerHTML = currentDate;

// Temperature, City

function showCurrentTemperature(response) {
  console.log(response);
  let locationTemperature = Math.round(response.data.main.temp);
  let locationCity = response.data.name;

  let h1City = document.querySelector("h1");
  h1City.innerHTML = `${locationCity}`;
  let headingTemperature = document.querySelector(".current-temperature");
  headingTemperature.innerHTML = `${locationTemperature}`; // u can use the same function - show Temperature!!!
}

function getCurrentLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

  let apiKey = "cf74cb383f57c3a59e8730c4319ab78d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showCurrentTemperature);
}

function showCurrentLocation() {
  navigator.geolocation.getCurrentPosition(getCurrentLocation);
  //getCurrentLocation();
  //showCurrentTemparature();
}

let button = document.querySelector("button");
button.addEventListener("click", showCurrentLocation);

//

function showTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let currentTemperature = document.querySelector(".current-temperature");
  currentTemperature.innerHTML = temperature;
  // better: document.querySelector(".current-temperature").innerHTML = Math.round(response.data.main.temp);

  let city = response.data.name;
  let currentCity = document.querySelector("h1");
  h1.innerHTML = `${city}`;
  // better: document.querySelector("h1").innerHTML = response.data.name;
}

function showCity(event) {
  event.preventDefault();

  let apiKey = "cf74cb383f57c3a59e8730c4319ab78d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let h1 = document.querySelector("h1");
let enterCityButton = document.querySelector("#enter-city");
let cityInput = document.querySelector("#city-input");
// better: let cityInput = document.querySelector("#city-input").value;

enterCityButton.addEventListener("submit", showCity);
