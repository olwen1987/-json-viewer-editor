var React = require('react');
var jQuery = require('jquery');
var JsonFileUpload = require('./json-file-upload');
var JsonCopyPaste = require('./json-copy-paste');


var JSONUploadControls = React.createClass({

    render: function () {
        return (
            <div className="upload-group">
                <JsonCopyPaste handlePaste={this.props.handlePaste}/>
                <JsonFileUpload/>
            </div>
        );
    }
});

module.exports = JSONUploadControls;
