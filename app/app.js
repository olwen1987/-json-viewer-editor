var React = require('react');


var App = React.createClass({

    render: function () {

        return (
            <div>
                <div className="page-title text-center well well-lg">
                    <h2>Json Editor and Viewer</h2>
                </div>
                <div className="pull-right">
                    <input type="file" className="btn btn-primary"/>
                    <div className="btn btn-success pull-right">Upload Json</div>
                </div>
                <div className="btn btn-warning">Edit File</div>
                <div className="btn btn-success">Save File</div>
            </div>
        );
    }
});

module.exports = App;
