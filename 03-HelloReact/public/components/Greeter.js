function greeter () {
  document.write('From greeter function');
}

// anyone who "requires" this file gets access to greeter function
module.exports = greeter;