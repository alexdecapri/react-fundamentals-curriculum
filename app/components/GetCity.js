var React = require('react');
var PropTypes = React.PropTypes;

function Button(props) {
  return (
    <button
      type="button"
      style={{margin: '5px 10px 5px 10px'}}
      className="btn btn-success"
      onClick={props.onSubmitCity}>
        {props.children}
    </button>
  )
}

function InputField(props) {
  return(
    <input
      className="form-control"
      onChange={props.onUpdateCity}
      style={{margin: '5px 0px 5px 0px'}}
      placeholder="Anywhere, USA"
      type="text"
      value={props.city} />
  )
}

function getStyles(props) {
  return {
    display: 'flex',
    flexDirection: props.direction || 'column', //so can use in navbar too (just asign direction to row)
    justifyContent: 'center',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function GetCity(props) {
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity}>
          Get Weather
      </Button>
    </div>
  )
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}

module.exports = GetCity;
