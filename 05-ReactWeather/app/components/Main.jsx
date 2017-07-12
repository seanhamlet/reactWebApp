var React = require('react');
var Nav = require('Nav');

var Main = React.createClass({
  render: function () {
    return (
      // remember you can only return one "root" element (in this case, a 'div')
      <div>
        <Nav/>
        <h2>Main Component</h2>
      </div>
    );
  }
});

module.exports = Main;