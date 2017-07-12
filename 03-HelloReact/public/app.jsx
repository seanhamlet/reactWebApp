var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('Greeter');

var firstName = 'Sean';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);