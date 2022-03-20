
// the div that will hold the weather icon and temperature
const currentConditions = document.querySelector('.conditions');

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=Pereira,co&units=metric&APPID=ac1a88692b0de1aba49260dcb233dbcf`

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {


    const icon = document.createElement('img');

    const temp = document.createElement('p');

    // set variables from the html elements
    const wind = document.querySelector('#windSpeed');
    const description = document.querySelector('#description');


    const currentTemp = jsObject.main.temp;
    const windSpeed = jsObject.wind.speed;
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
 
     // To check for the windchill
     let windchill = '';
     if (currentTemp <= 50 && windSpeed > 3) {
       windchill = windChill(currentTemp, windSpeed);
       windchill = `${windchill}&#176;F`;
     } else {
       windchill = 'N/A';
     }
 
     document.querySelector('#windChill').innerHTML = windchill;
 
     // The formula to calculate the wind chill factor. The .toFixed is to round the number.
     function windChill (temp, speed) {
       return (35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16)).toFixed();
 }
   })