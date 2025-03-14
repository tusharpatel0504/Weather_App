const apnikey = "4886c49a666cc330eea6ee0ff6f8111d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
     
    async function getWeatherData(city) {
    const response = await fetch(apiUrl + city + `&appid=${apnikey}`);
    var data = await response.json();
    console.log(data);


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}
btn.addEventListener("click", () => {
    getWeatherData(search.value);
})