const apiKey = '9e62c5023c22f91d8408c8d6dca90d0d'; 

document.getElementById('Weather Details').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    getWeatherData(city);
});

function getWeatherData(city) {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('City not found!');
        });
}