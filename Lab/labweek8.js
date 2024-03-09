const api_url = 'https://goweather.herokuapp.com/weather/toronto';

async function getWeather(){
    const response = await fetch(api_url);
    const data = await response.json();
    
    //console.log(data); //shows all the data acquired

    //takes data from api and creates variables for each needed value
    const {description, temperature, wind} = data; 
    const nextDayTemp = data.forecast[1].temperature;
    const nextDayWind = data.forecast[1].wind;
    const nextNextDayTemp = data.forecast[2].temperature;
    const nextNextDayWind = data.forecast[2].wind; 

    //console.log(description, temperature, wind, nextDay, nextNextDay); //shows the data specified

    //day description
    document.getElementById("descriptionDay").textContent = description;
    //if description matches one of these cases change font color to match
    if (description == "Sunny"){
        document.getElementById("descriptionDay").style.color = "yellow";
    }
    if (description == "Partly cloudy"){
        document.getElementById("descriptionDay").style.color = "azure";
    }
    if (description == "Raining"){
        document.getElementById("descriptionDay").style.color = "CornflowerBlue";
    }

    //day1 (today) weather
    document.getElementById("temperature1").textContent = temperature;
    document.getElementById("wind1").textContent = wind;

    //day2 (tmrw) weather
    document.getElementById("temperature2").textContent = nextDayTemp;
    document.getElementById("wind2").textContent = nextDayWind;

    //day3 (after) weather
    document.getElementById("temperature3").textContent = nextNextDayTemp;
    document.getElementById("wind3").textContent = nextNextDayWind;
}

getWeather();