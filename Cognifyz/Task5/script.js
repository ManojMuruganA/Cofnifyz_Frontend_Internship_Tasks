const apiKey = "bd5e378503939ddaee76f12ad7a97608"; // Replace with your OpenWeatherMap API key
const weatherResult = document.getElementById("weatherResult");
const getWeatherButton = document.getElementById("getWeather");

getWeatherButton.addEventListener("click", () => {
    const city = document.getElementById("city").value;
    if (city) {
        fetchWeatherData(city);
    } else {
        weatherResult.innerHTML = "<p>Please enter a city name!</p>";
    }
});

function fetchWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then((data) => {
            displayWeatherData(data);
        })
        .catch((error) => {
            weatherResult.innerHTML = `<p>${error.message}</p>`;
        });
}

function displayWeatherData(data) {
    const { name, main, weather } = data;
    weatherResult.innerHTML = `
        <h3>${name}</h3>
        <p>Temperature: ${main.temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}
