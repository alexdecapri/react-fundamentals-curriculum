var React = require('react');
var styles = require('../styles');


var Home = React.createClass({
  render: function() {
    return (
        <div style={styles.homeContainer} className="text-center main-container">
          <h1 style={styles.homeHeader}>
            Enter a City and State
          </h1>
          <input
            style={styles.homeInput}
            className="form-control"
            placeholder="Anywhere, USA"
            type="text" />
          <button
            className="btn btn-success"
            type="submit">
              Get Weather
          </button>
        </div>

    )
  }
});

module.exports = Home;
