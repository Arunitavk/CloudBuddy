const API_KEY = "d640009e4724298c18cba16895cac661"; 
console.log("Weather script loaded");   


navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    console.log("Geolocation success"); 
    console.log("Latitude:", position.coords.latitude);  
    console.log("Longitude:", position.coords.longitude); 

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    fetchWeather(lat, lon);
}

function error() {
    console.log("Geolocation denied");  
    document.getElementById("location").textContent =
        "Location access denied";
}

function fetchWeather(lat, lon) {
    console.log("Fetching weather…"); 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log("URL:", url);        

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("Weather API Response:", data);  
            displayWeather(data);
        })
        .catch(err => console.error("Fetch error:", err)); 
}

function displayWeather(data) {
    console.log("Displaying weather..."); 

    const locationText = document.getElementById("location-text");
    const locationIcon = document.getElementById("location-icon");
    locationText.classList.remove("location-loading");
    locationIcon.style.color = "#62b5e8";
    locationText.textContent = data.name;

    document.getElementById("temperature").textContent = `${data.main.temp}°C`;
    document.getElementById("description").textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    console.log("Icon code:", iconCode); 

    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    console.log("Icon URL:", iconUrl);  

    const icon = document.getElementById("weather-icon");
    icon.src = iconUrl;
    icon.style.display = "block";
}
