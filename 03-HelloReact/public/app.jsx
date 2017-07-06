// use uppercase - naming convention for React components
var Greeter = React.createClass({
  // define behavior for component
  render: function () {
    // even though we have multiple html elements (h1 and p)
    // can only return one "root" element (div)
    return (
      <div>
        <h1>Hello React!</h1>
        <p>This is from a component.</p>
      </div>
    );
  }
});

ReactDOM.render(
  <Greeter/>,
  document.getElementById('app')
);