var Greeter = React.createClass({
  // define default props for component
  getDefaultProps: function () {
    // return an object of properties
    return {
      name: 'React',
      message: 'This is from a component!'
    };
  },
  onButtonClick: function (e) {
    // prevents form from submitting and causing a page refresh
    // since we are working with React we want to use single page application ideas
    // one of those ideas is to NOT have browser completely refresh the app
    e.preventDefault();

    // this.refs contains the "ref" name defined in render in the input element
    // need to get "value" from input called "name" to get it's textbox value
    var name = this.refs.name.value;

    alert(name);
  },
  render: function () {
    // get props for component
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message + '!!'}</p>
        {/* ref is a React attribute that allows us to give an 
        element name we want to access later*/}
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});

var firstName = 'Sean';

ReactDOM.render(
  <Greeter name={firstName} message="Message from prop!"/>,
  document.getElementById('app')
);