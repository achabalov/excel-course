const CODES = {
    A: 65,
    Z: 90
}

function createCel() {
    return `
    <div class='cell' contenteditable></div>
    `
}

function toColumn(col) {
    return `
    <div class='column'>${col}</div>
    `
}

function createRow(index, content) {
    return `
    <div class='row'>
        <div class='row-info'>${index}</div>
        <div class='row-data'>${content}</div>
    </div>`
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

function toCharCel(_, index) {
    return String.fromCharCode(CODES.A + index)+''+index
}

export function createTable(rowsCount = 33) {
    const colsCount = CODES.Z - CODES.A + 1;
    const rows = [];
    const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('')

    rows.push(createRow('', cols))

    const cels = new Array(colsCount)
    .fill('')
    .map(toCharCel)
    .map(createCel)
    .join('')

    for(let i = 0; i< rowsCount; i++){
        rows.push(createRow(i + 1, cels))
    }
  
    return rows.join('');
}