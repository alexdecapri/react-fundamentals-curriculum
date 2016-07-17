var React = require('react');
var Forecast = require('../components/Forecast');
var helpers = require('../helpers/api');


var ForecastContainer = React.createClass({
  render: function() {
    return (
      <Forecast />
    );
  }
});

module.exports = ForecastContainer;
