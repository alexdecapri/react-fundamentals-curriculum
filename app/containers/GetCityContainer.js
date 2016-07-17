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
  contextTypes: {
    router: PropTypes.object.isRequired
  }, //need this for this.context.router.push to work below
  getInitialState: function() {
    return {
      city: ''
    }
  },
  handleSubmitCity: function(e) {
    e.preventDefault();
    console.log('this.state.city:', this.state.city);
    // helpers.getFiveDay(this.state.city)
    //   .then(function(data) {
    //     console.log('API received', data);
    //   })
    console.log(this);
    this.context.router.push('/forecast/' + this.state.city);
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
