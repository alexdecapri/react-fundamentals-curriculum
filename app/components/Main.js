var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <p>Main.js Header</p>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
