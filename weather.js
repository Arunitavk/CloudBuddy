const API_KEY = "YOUR_API_KEY_HERE"; // Get it from openweathermap.org

// Get user's location
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetchWeather(lat, lon);
}

function error() {
    document.getElementById("location").textContent =
        "Location access denied";
}

function fetchWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data));
}

function displayWeather(data) {
    document.getElementById("location").textContent =
        data.name;

    document.getElementById("temperature").textContent =
        `Temperature: ${data.main.temp}°C`;

    document.getElementById("description").textContent =
        data.weather[0].description;

    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const icon = document.getElementById("weather-icon");
    icon.src = iconUrl;
    icon.style.display = "block";
}
