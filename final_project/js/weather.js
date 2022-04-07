const currentConditions = document.querySelector('.conditions');
const foreConditions1 = document.querySelector('.forecast_con1');
const foreConditions2 = document.querySelector('.forecast_con2');
const foreConditions3 = document.querySelector('.forecast_con3');

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Bethesda,20814,us&units=metric&APPID=ac1a88692b0de1aba49260dcb233dbcf`
const apiFORE = `https://api.openweathermap.org/data/2.5/forecast/hourly?q=Bethesda,20814,us&units=metric&APPID=ac1a88692b0de1aba49260dcb233dbcf`
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

//Elements Current weather
    const icon = document.createElement('img');
    const temp = document.createElement('p');

    //Elements Forecast 1
    const iconDay1 = document.createElement('img');
    const tempDay1 = document.createElement('p');

    //Elements Forecast 2
    const iconDay2 = document.createElement('img');
    const tempDay2 = document.createElement('p');

    //Elements Forecast 3
    const iconDay3 = document.createElement('img');
    const tempDay3 = document.createElement('p');

    // set variables from the html elements
    const description = document.querySelector('#description');
    const foredescription1 = document.querySelector('#forecast_des1');
    const foredescription2 = document.querySelector('#forecast_des2');
    const foredescription3 = document.querySelector('#forecast_des3');


    const currentTemp = jsObject.main.temp;
    const weatherIcon = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const weatherDescription = jsObject.weather[0].description;
    const degree = "°C";

     currentConditions.appendChild(icon);
     currentConditions.appendChild(temp);
 
     icon.classList.add('icon');
     temp.classList.add('temperature');
 
     temp.textContent = `${currentTemp.toFixed(0)}${degree}`;
     icon.setAttribute('src', weatherIcon);
     icon.setAttribute('alt', weatherDescription);
     description.textContent = weatherDescription;
     wind.textContent = windSpeed.toFixed();


    // Variables for forecast weather
    // First Day
    const Day1Temp = jsObject.daily[0].temp.max;
    const Day1Icon = `https://openweathermap.org/img/w/${jsObject.daily[0].weather[0].icon}.png`;
    const Day1Descript = jsObject.daily[0].weather[0].description;
    // Second Day
    const Day2Temp = jsObject.daily[1].temp.max;
    const Day2Icon = `https://openweathermap.org/img/w/${jsObject.daily[1].weather[0].icon}.png`;
    const Day2Descript = jsObject.daily[1].weather[0].description;
    // Thord Day
    const Day3Temp = jsObject.daily[2].temp.max;
    const Day3Icon = `https://openweathermap.org/img/w/${jsObject.daily[2].weather[0].icon}.png`;
    const Day3Descript = jsObject.daily[2].weather[0].description;


    
    });