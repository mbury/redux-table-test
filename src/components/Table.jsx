import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import Row from './Row';
import * as actionCreators from '../action_creators';

export const Table = React.createClass({
    mixins: [PureRenderMixin],
    render: function () {
        return <div>
            <button onClick={() => {this.props.addColumn(this.props.data.size)}}>Add column</button>
            <button onClick={() => {this.props.deleteColumn(this.props.data.size)}}>Delete column</button>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        {this.props.data.map((entry) =>
                            <th key={entry.get("column_id")}>{entry.get("column_id")}</th>
                        )}
                    </tr>
                    {this.props.headers.map((entry, index) =>
                        <Row key={entry.get("id")} header={entry} data={this.props.data} index={index}/>
                    )}
                </tbody>
            </table>
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        data: state.getIn(['table', 'data']),
        headers: state.getIn(['table', 'headers'])
    };
}

export const TableContainer = connect(mapStateToProps, actionCreators)(Table);