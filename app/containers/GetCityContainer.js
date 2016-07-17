var React = require('react');
var PropTypes = React.PropTypes;
var GetCity = require('../components/GetCity');
var helpers = require('../helpers/api');

var GetCityContainer = React.createClass({
  getDefaultProps: function() {
    return {
      direction: 'column'
    }
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function() {
    return {
      city: ''
    }
  },
  handleSubmitCity: function() {
    console.log('original console.log', this.state.city);
    helpers.getWeatherTest(this.state.city)
      .then(function(data) {
        console.log('API received', data);
      })
  },
  handleUpdateCity: function(e) {
    this.setState({
      city: e.target.value
    })
  },
  render: function() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city} />
    );
  }
});

module.exports = GetCityContainer;
