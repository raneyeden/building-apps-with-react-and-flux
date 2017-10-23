/*eslint-disable strict */ // Disabling check because we can't run strict mode.  Need global variables for jQuery

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery'); // Global to reference jQuery by $ or variable 'jQuery', bootstrap requires jQuery to be global

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;