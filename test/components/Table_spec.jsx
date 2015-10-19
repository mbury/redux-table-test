import React from 'react/addons';
import {List, Map} from 'immutable';
import {Table} from '../../src/components/Table';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate}
    = React.addons.TestUtils;

describe('Table', () => {

    it('renders a table', () => {

        const data = List.of(
            new Map({column_id: 'COL1', data: List.of(10, 20)}),
            new Map({column_id: 'COL2', data: List.of(11, 21)}));

        const headers =  List.of(
            new Map({id: 1, name: "parameter1"}),
            new Map({id: 2, name: "parameter2"})
        );

        const component = renderIntoDocument(
            <Table data={data} headers={headers} />
        );
        const table = scryRenderedDOMComponentsWithTag(component, 'table');

        expect(table.length).to.equal(1);
    });

});