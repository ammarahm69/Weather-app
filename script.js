document.addEventListener('DOMContentLoaded', function () {
    let search = document.getElementById('search');
    let button = document.getElementById('btn');

    async function cityNames() {
        let appid = '81dac2c0408f63b90a7b02974431e6e4';
        let unit = 'metric';
        let cityName = search.value;
        
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}&units=${unit}`);
            let data = await response.json(); // Await the json() method to get the data

            console.log('Received data successfully:', data);

            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('temperature').innerText = `${data.main.temp}°C`;
            document.getElementById('feels_like').textContent = `Feels like: ${data.main.feels_like}°C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind_speed').textContent = `Wind speed: ${data.wind.speed} m/s`;
            document.getElementById('city').textContent = `${data.name}`;
        } catch (error) {
            console.log('Fetch error:', error);
        }
    }

    button.addEventListener('click', cityNames);
});
