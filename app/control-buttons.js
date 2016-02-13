var React = require('react');
var jQuery = require('jquery');

var ControlButtons = React.createClass({
    render: function () {
        return (
            <div className="control-buttons btn-group pull-right">
                <button className="add btn btn-success" onClick={this._onAddHandler}>
                    <span className="fa fa-plus"/></button>
                <button className="edit btn btn-warning" onClick={this._onEditHandler}>
                    <span className="fa fa-edit"/></button>
                <button className="delete btn btn-danger" onClick={this._onDeleteHandler}>
                    <span className="fa fa-minus"/></button>
            </div>
        );
    },
    _onAddHandler: function (event) {
        console.log('add', this.props.data);
        this.props.dataChangeHandler();

    },
    _onDeleteHandler: function (event) {
        console.log('delete', this.props.data);
        this.props.dataChangeHandler();

    },
    _onEditHandler: function (event) {
        console.log('edit', this.props.data);
        this.props.dataChangeHandler(this);

    }
});

module.exports = ControlButtons;
