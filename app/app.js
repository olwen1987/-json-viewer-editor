var React = require('react');
var jQuery = require('jquery');
var JsonComponent = require('./json-component');
var JSONUploadControls = require('./json-upload-controls');
var JSONProcessor = require('./json-processor');


var App = React.createClass({
    getInitialState: function () {
        return ({data: [{name: [{aaron: [{FN: "aaron"}, {LN: "pinto"}]}, {pinto: "pinto"}]}, {place: "Bangalore"}, {qualification: "Masters"},{magic:["10","20","30","40"]}]})
    },
    handleJsonPaste: function () {
        var that = this;
        console.log($(".json-text").val());
        try {
            var jsonData = $.parseJSON($(".json-text").val());
        }
        catch (e) {
            alert("Not a valid JSON");
        }
        this.setState({data: jsonData});
    },
    render: function () {
        return (
            <div>
                <div className="page-title text-center well well-lg">
                    <h2>Json Editor and Viewer</h2>
                </div>
                <div className = "control-fluid row" >
                    <div className="file-input-section col-xs-12 col-xm-6 col-lg-4 pull-right">
                        <JSONUploadControls handlePaste={this.handleJsonPaste}/>
                    </div>
                    <div className = "file-edit-section col-xs-12 col-xm-6 col-lg-8" >
                        <div className="edit-controls col-xs-12">
                            <h4 className="text-center">Edit and Save Json</h4>
                            <div className="well well-lg clearfix">
                                <JSONProcessor data={this.state.data}/>
                            </div>
                            <div className="btn btn-warning">Edit File</div>
                            <div className="btn btn-success">Save File</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = App;
