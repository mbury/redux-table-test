import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    getData: function() {
        return this.props.data || [];
    },
    render: function () {
        return <tr>
            <td>
                {this.props.header.get("name")}
            </td>
            {this.getData().map((entry) =>
                <td key={entry.get("column_id") + this.props.header.get("id")} >{entry.get("data").get(this.props.index)}</td>
            )}
        </tr>;
    }
});