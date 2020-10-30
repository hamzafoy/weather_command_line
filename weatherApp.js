//Objective: Create a weather app that will give the user the current weather of whatever location the user provides.

//Onboard necessary modules
const https = require('https');
const colors = require('colors');
const carKey = require('./carKeys');
let apiKey = carKey.getKey();

//Function to draw data from the OpenWeather API & print an appropriate message
function printWeather(zipcode, temperature, weather, city) {
    let weatherCondition = weather.replace(/[s]$/, "y").toLowerCase();
    if (weatherCondition === 'rain' || weatherCondition === 'mist') {
        weatherCondition += 'y';
    }
    const temperatureRounded = Math.ceil(temperature);
    const message = `The current weather in the city of ${city} [ZIP: ${zipcode}] is ${temperatureRounded}F with ${weatherCondition} conditions.`;
    console.log(colors.brightRed(message));
}

function checkWeather(zipcode) {
    //Connect to API
const request = https.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=${apiKey}`, response => {
    let body = "";
    //Read Data
    response.on('data', data => {
        body += data.toString();
    });
    response.on('end', () => {
        //Parse Data
        const profile = JSON.parse(body);
        //Print Data
        printWeather(zipcode, profile.main.temp, profile.weather[0].main, profile.name);
    })
});
}

const userInput = process.argv.slice(2);
userInput.forEach(checkWeather);