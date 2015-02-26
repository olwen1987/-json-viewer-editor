var React = require('react');
var jQuery = require('jquery');

var ControlButtons = React.createClass({
    render: function () {
        return (
            <div className="control-buttons">
                <button className="add btn btn-success"><span className="fa fa-plus"></span></button>
                <button className="edit btn btn-warning"><span className="fa fa-edit"></span></button>
                <button className="delete btn btn-danger"><span className="fa fa-minus"></span></button>
            </div>
        );
    }
});

module.exports = ControlButtons;
