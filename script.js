console.log('Script Here');
let promise = new Promise(function(resolve, reject) {
    let appid = '81dac2c0408f63b90a7b02974431e6e4';
    let unit = 'metric'
    resolve(fetch(`https://api.openweathermap.org/data/2.5/weather?lat=24.860966&lon=66.990501&appid=${appid}&units=${unit}`));
});

async function getData() {
    try {
        let response = await promise;
        let data = await response.json(); // Await the json() method to get the data

        console.log('Received data successfully:', data);

        // Access specific data points and update the HTML content
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('temperature').textContent = data.main.temp;
        document.getElementById('feels_like').textContent = data.main.feels_like;
        document.getElementById('humidity').textContent = data.main.humidity;
        document.getElementById('wind_speed').textContent = data.wind.speed;

    } catch (error) {
        console.log('Fetch error:', error);
    }
}

//getData();
