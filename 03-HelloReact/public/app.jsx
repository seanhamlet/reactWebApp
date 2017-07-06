var Greeter = React.createClass({
  // define default props for component
  getDefaultProps: function () {
    // return an object of properties
    return {
      name: 'React',
      message: 'This is from a component!'
    };
  },
  render: function () {
    // get props for component
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
      </div>
    );
  }
});

var firstName = 'Sean';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop!"/>,
  document.getElementById('app')
);