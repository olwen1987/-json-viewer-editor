var React = require('react');
var jQuery = require('jquery');


var JSONFileUpload = React.createClass({
    render: function () {
        return (
            <div className="file-upload-json">
                <h4 className="text-center" >Upload File Here</h4>
                <input type="file" className="btn btn-primary"/>
                <div className="btn btn-success pull-right">Upload Json</div>
            </div>
        );
    }
});

module.exports = JSONFileUpload;
