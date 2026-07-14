async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = "d635a16bb6280001b8f49e66bb777607";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found!");
        }

        const data = await response.json();

        document.getElementById("result").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>🌡 Temperature:</strong> ${data.main.temp} °C</p>
            <p><strong>🤗 Feels Like:</strong> ${data.main.feels_like} °C</p>
            <p><strong>☁ Weather:</strong> ${data.weather[0].description}</p>
            <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>🌬 Wind Speed:</strong> ${data.wind.speed} m/s</p>
        `;

    } catch (error) {
        document.getElementById("result").innerHTML =
            `<p style="color:red;">${error.message}</p>`;
    }

}