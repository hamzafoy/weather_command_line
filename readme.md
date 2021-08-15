
## Table of Contents

1. [What is this app?](#id-section1)
2. [Technologies Used](#id-section2)
3. [Notes](#id-section3)

<hr>

<div  id='id-section1'/>

### What is this app?

This application relies on the **OpenWeatherMap** API for current weather condition & temperature data. This application receives an input of a *ZIP code* and outputs the *name of the city that the ZIP belongs to*, *temperature in Fahrenheit*, & *current weather conditions*.

<hr>

<div id='id-section2' />

### Technologies Used

* Vanilla Frontend JavaScript
* Node.js

<hr>

<div id='id-section3' />

### Notes

* This application is very simple to use. You must type `node weatherApp.js [ZIPCODE GOES HERE]`. The ZIP goes after the application name in the command line. The response will print out the name of the city that ZIP belongs to, the current temperature and the current weather conditions on the ground.
* This application relies on requiring the `"https"` & `"colors"` modules.
* The OpenWeatherMap API Key in my name is hidden in a file hidden from further git commits via the .gitignore file. You may request your own API Key at [OpenWeatherMap](https://openweathermap.org/api).
