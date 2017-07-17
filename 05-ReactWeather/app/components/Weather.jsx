var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Miami',
      temp: 88
    }
  },
  handleSearch: function (location) {
    // 'that' variable: simple way to allow access to 'this' 
    //    even after entering openWeatherMap.getTemp function where 'this' binding gets lost
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
    })
  },
  render: function () {
    var {temp, location} = this.state;

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage location={location} temp={temp}/>
      </div>
    )
  }
});

module.exports = Weather;