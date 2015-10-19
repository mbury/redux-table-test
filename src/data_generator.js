const HEADERS = 500;
const COLUMNS_INIT = 20;

export function generateHeaders (){
    let headers = [];

    for (let i = 1; i <= HEADERS; i++) {
        headers.push({id: i, name: "parameter" + i});
    }
    return headers;
}

export function generateData (){
    let data = [];
    for (let i = 1; i <= COLUMNS_INIT; i++) {
        data.push(generateColumn(i));
    }
    return data;
}

export function generateColumn(id){
    let arr = [];
    for (let x=1; x <= HEADERS; x++) {
        arr.push(Math.round(Math.random()* 100) + 1)
    }
    return {column_id: 'COL' + id, data: arr}
}