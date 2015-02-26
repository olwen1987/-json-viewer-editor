var React = require('react');
var _ = require('lodash');


var JsonComponent = React.createClass({

    renderObject: function (data) {
        console.log("Object");
        console.log(data);
        return (<tr>
            <JsonComponent data={data}/>
        </tr>)

    },
    renderArray: function (key, data) {
        console.log("Array");
        console.log(data);
        return (<tr>
            <td>{key}</td>
            <td>
                <table className="table table-responsive table-bordered">
                    <tbody>{data.map(function (obj) {
                        return (<JsonComponent data={obj}/>)
                    })}</tbody>
                </table>
            </td>
        </tr>   )
    },
    renderString: function (key, data) {
        console.log("String");
        console.log(data);

        return <tr>
            <td className="key">{key}</td>
            <td>{data}</td>
        </tr>

    },
    render: function () {
        var children;
        var that = this;
        console.log(this.props.data);
            var keys = Object.keys(this.props.data);
            children = keys.map(function (key) {
                var value = that.props.data[key];
                console.log("Key : " + key);
                if(typeof value == "object")
                if (value.constructor == Array) {
                    return that.renderArray(key, value);
                }
                if (value.constructor == Object) {
                    return that.renderObject(value);
                }
                if (value.constructor == String) {
                    return that.renderString(key, value);
                }
            });
            return (    <table className="table table-responsive table-bordered">
                <tbody>
                    {children}
                </tbody>
            </table>
            )
        }

});

module.exports = JsonComponent;
