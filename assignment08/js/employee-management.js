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
const name = $('nameInput');
const title = $('titleInput');
const ext = $('extInput');
const add = $('addEmpButton');
const form = $('addEmpForm');
const count = $('count');

add.addEventListener("click", validate);

function validate() {
    let error = false;
    if(name === undefined || name.value == "") {
        error = true;
        showValidationError(name, 'Name can not be blank');
    }
    if(ext === undefined || ext.value == "" || parseInt(ext.value) < 0) {
        error = true;
        showValidationError(ext, 'Extension can not be negative or blank');
    }
    if(title === undefined || title.value == "") {
        error = true;
        showValidationError(title, 'Title can not be blank');
    }
    if (!error) {
        addEmployee();
        clearFields();
        showRecords();
        showCount() 
    }
}

function showCount() {
    count.textContent = 'Showing '+employees.length + ' employees';
}

function clearFields() {
    name.value = '';
    title.value = '';
    ext.value = '';
    const inputs = document.getElementsByTagName('input');
    for (input of inputs) {
        if (input.nextSibling.nextSibling)
            input.nextSibling.nextSibling.innerHTML = '';
    }
}

function createDeleteButton(employee) {
    const button = document.createElement('button');
    const textNode = document.createTextNode('Delete');
    button.className = 'deleteButton';
    button.style.alignSelf = 'center';
    button.appendChild(textNode);
    button.addEventListener('click', deleteEmployee.bind(this, employee));
    return button;
}

function deleteEmployee(employeeToDelete) {
    employees = employees.filter(employee => {
        return employee[2] !== employeeToDelete[2]
    });
    showRecords();
    showCount();
}

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

function addEmployee() {
    const employee = [name.value, title.value, ext.value];
    employees.push(employee);
}

function getEmployeeRow(employee) {
    const tr = document.createElement('tr');
    tr.appendChild(createTableCell(employee[0]));
    tr.appendChild(createTableCell(employee[1]));
    tr.appendChild(createTableCell(employee[2]));
    tr.appendChild(createDeleteButton(employee));
    return tr;
}

showRecords();
showCount();