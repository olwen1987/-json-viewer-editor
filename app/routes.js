var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var App = require('./app');


module.exports = (
    <Route name="app" path="/" handler={App}/>
);
