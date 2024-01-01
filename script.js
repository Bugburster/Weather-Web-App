let apiKey = "8eaa7f1fd224259d0912e4744b61d9d2";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    let response = await fetch(apiUrl + `&q=${city}` +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        return;
    }
 
    document.querySelector(".error").style.display = "none";
    let data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";

    if(data.weather[0].main == "Cloud"){
        weatherIcon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
}

document.querySelector(".button").addEventListener("click",function(){
    let input = document.querySelector(".input");
    checkWeather(input.value);
})

