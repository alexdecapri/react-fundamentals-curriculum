var axios = require('axios');

var baseUrl = 'http://api.openweathermap.org/data/2.5/';
var apiKey = 'c8969cdf2826c2e9a345e56f969520c2';


var helpers = {
  getWeatherTest: function(city) {
    return axios.get(baseUrl + 'weather?q=' + city + '&appid=' + apiKey)
      .then(function(response) {
        return response.data.weather[0];
      }).catch(function(err) {
        console.log(err);
      })
  }
};
module.exports = helpers;
