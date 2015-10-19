import {List, Map, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                table: Map({
                    data: List.of(
                        Map({column_id: 'COL1', data: List.of(10, 20)}),
                        Map({column_id: 'COL2', data: List.of(11, 21)})),
                    headers: List.of(
                        Map({id: 1, name: "parameter1"}),
                        Map({id: 2, name: "parameter2"}))
                })
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            table: {
                data: [
                    {column_id: 'COL1', data: [10, 20]},
                    {column_id: 'COL2', data: [11, 21]}],
                headers: [
                    {id: 1, name: "parameter1"},
                    {id: 2, name: "parameter2"}]
            }
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map({
                table: Map({
                    data: List.of(
                        Map({column_id: 'COL1', data: List.of(10, 20)}),
                        Map({column_id: 'COL2', data: List.of(11, 21)})),
                    headers: List.of(
                        Map({id: 1, name: "parameter1"}),
                        Map({id: 2, name: "parameter2"}))
                })
            })
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            table: {
                data: [
                    {column_id: 'COL1', data: [10, 20]},
                    {column_id: 'COL2', data: [11, 21]}],
                headers: [
                    {id: 1, name: "parameter1"},
                    {id: 2, name: "parameter2"}]
            }
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: Map({
                table: Map({
                    data: List.of(
                        Map({column_id: 'COL1', data: List.of(10, 20)}),
                        Map({column_id: 'COL2', data: List.of(11, 21)})),
                    headers: List.of(
                        Map({id: 1, name: "parameter1"}),
                        Map({id: 2, name: "parameter2"}))
                })
            })
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            table: {
                data: [
                    {column_id: 'COL1', data: [10, 20]},
                    {column_id: 'COL2', data: [11, 21]}],
                headers: [
                    {id: 1, name: "parameter1"},
                    {id: 2, name: "parameter2"}]
            }
        }));
    });

});