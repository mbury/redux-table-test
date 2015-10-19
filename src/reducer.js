import {Map, fromJS} from 'immutable';
import {generateColumn} from './data_generator.js';

function setState(state, newState) {
    return state.merge(newState);
}

function addColumn(state, newColumnId) {
    let colToAdd = fromJS(generateColumn(newColumnId + 1));
    return state.updateIn(
        ['table', 'data'],
        [],
        (list) => list.push(colToAdd)
    );
}

function deleteColumn(state, delColumnId) {
    return state.updateIn(
        ['table', 'data'],
        [],
        (list) => list.delete(delColumnId - 1)
    );
}

export default function(state = Map(), action) {
    switch (action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'ADD_COLUMN':
            return addColumn(state, action.newColumnId);
        case 'DEL_COLUMN':
            return deleteColumn(state, action.delColumnId);
    }
    return state;
}