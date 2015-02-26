var React = require('react');
var jQuery = require('jquery');

var JSONCopyPaste = React.createClass({
    render: function () {
        return (
            <div className="copy-paste-json">
                <h4 className="text-center">Paste Json Contents here</h4>
                <div>
                    <textarea className="json-text col-xs-12" rows="10"/>
                    <div className="btn btn-success pull-right" onClick={this.props.handlePaste}>Parse Json</div>
                </div>
                <p className="text-center">OR</p>
            </div>
        );
    }
});

module.exports = JSONCopyPaste;
