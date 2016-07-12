var React = require('react');
var styles = require('../styles');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <div style={styles.banner}>
          <div style={styles.bannerTitle}>Weather App</div>
        </div>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
