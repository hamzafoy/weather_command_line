## This application is intended to be run from the command prompt on Windows systems.

*This application relies on the **OpenWeatherMap** API for current weather condition & temperature data.*

# How to use

This application is very simple to use. You must type `node weatherApp.js [ZIPCODE GOES HERE]`. The ZIP goes after
the application name in the command line. The response will print out the name of the city that ZIP belongs to, the current temperature
and the current weather conditions on the ground.

This application relies on requiring the `"https"` & `"colors"` modules. This code is handwritten and accounts for most of the
grammatical alterations necessary for the command line output to read correctly. I intend to go back through this code and put in
appropriate error handling and error messaging.

This application is a small one, but is a demonstration of my growing proficiency with dealing with JavaScript & tools such as Node.js & npm.
If you have a suggestion for a change, feel free to create an issue in GitHub and articulate the suggestion to me.

# Please note the following

The OpenWeatherMap API Key in my name is hidden in a file hidden from further git commits via the .gitignore file. You may request your own API Key at
[OpenWeatherMap](https://openweathermap.org/api). Simply put your own API key in Line 23 where it asks for `${apiKey}` after `APPID=`.