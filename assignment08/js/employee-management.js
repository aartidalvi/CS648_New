/*eslint-env browser*/

/* Initial 5 entries that are shown on page load */
var employees = [
    ['Aarti', 'Intern', 432],
    ['Alex', 'Senior Manager', 342],
    ['Carl', 'Software Engineer', 788],
    ['Andrew', 'CEO', 566],
    ['Neeta', 'Product Manager', 947],
];

var $ = function(id) {
    return window.document.getElementById(id)
};

var employeesTable = $('employeesTable');

function createTableCell(value) {
    const cell = document.createElement('td');
    const textNode = document.createTextNode(value);
    cell.appendChild(textNode);
    return cell;
}

function showRecords() {
    const body = employeesTable.children[1];
    body.innerHTML = '';
    employees.map(employee => {
        body.appendChild(getEmployeeRow(employee));
    });
}

function getEmployeeRow(employee) {
    const tr = document.createElement('tr');
    tr.appendChild(createTableCell(employee[0]));
    tr.appendChild(createTableCell(employee[1]));
    tr.appendChild(createTableCell(employee[2]));
    tr.appendChild(createTableCell('delete'));
    return tr;
}

showRecords();