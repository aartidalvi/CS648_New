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

//add event listener to the add employee button
add.addEventListener("click", validate);

//validate the inputs from the form.
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

//Show validation error to the specific span elements
function showValidationError(element, msg) {
    const spanID = element.id+'Span';
    const spanNode = document.getElementById(spanID);
    spanNode.innerHTML = msg;
}

//show the current count of employees
function showCount() {
    count.textContent = 'Showing '+ employees.length + ' employees';
}

//clear the field after adding the employee to the table
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

//create the delete button for the new row to be added
function createDeleteButton(employee) {
    const button = document.createElement('button');
    const deleteNode = document.createTextNode('Delete');
    button.className = 'deleteButton';
    button.style.alignSelf = 'center';
    button.appendChild(deleteNode);
    button.addEventListener('click', deleteEmployee.bind(this, employee));
    return button;
}

//delete the employee from the list and refresh the data in table
function deleteEmployee(employeeToDelete) {
    employees = employees.filter(employee => {
        return employee[2] !== employeeToDelete[2]
    });
    showRecords();
    showCount();
}

//create a cell of the new row
function createTableCell(value) {
    const cell = document.createElement('td');
    const textNode = document.createTextNode(value);
    cell.appendChild(textNode);
    return cell;
}

//refresh the table data
function showRecords() {
    const body = employeesTable.children[1];
    body.innerHTML = '';
    employees.map(employee => {
        body.appendChild(getEmployeeRow(employee));
    });
}

//add new employee to the list
function addEmployee() {
    const employee = [name.value, title.value, ext.value];
    employees.push(employee);
}

//create a row for the new entry from the form
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