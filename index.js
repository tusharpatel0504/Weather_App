const apnikey = "4886c49a666cc330eea6ee0ff6f8111d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weather_icon = document.querySelector(".weather img");
     
    async function getWeatherData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apnikey}`);
    var data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weather_icon.src = "clouds.png";
    }
    else if(data.weather[0].main == 'Clear'){
        weather_icon.src = "clear.png";
    }
    else if(data.weather[0].main == 'Rain'){
        weather_icon.src = "rain.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        weather_icon.src = "drizzle.png";
    }
    else if(data.weather[0].main == 'Haze'){
        weather_icon.src = "mist.png";
    }
}
btn.addEventListener("click", () => {
    getWeatherData(search.value);
})
search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        getWeatherData(search.value);
    }
});
