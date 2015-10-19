export function setState(state) {
    return {
        type: 'SET_STATE',
        state
    };
}

export function addColumn(newColumnId) {
    return {
        type: 'ADD_COLUMN',
        newColumnId
    };
}

export function deleteColumn(delColumnId) {
    return {
        type: 'DEL_COLUMN',
        delColumnId
    };
}