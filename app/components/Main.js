var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello World!</p>
        {this.props.children}
      </div>
    )
  }
})

module.exports = Main;
