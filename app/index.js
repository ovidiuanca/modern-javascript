var ReactDOM = require('react-dom');
var React = require('react');

var App = require('./components/App');

require('./index.css');

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
