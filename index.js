// Write your solution in this file!
const employee = {
    name: 'John',
    streetAddress: "2964 Deep Gap Rd",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee,
    [key]: value
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    
    return employee
}

function deleteFromEmployeeByKey (employee, key) {
    let newEmployee = {...employee}
    delete newEmployee.name

    return newEmployee
}

// function ddestructivelyDeleteFromEmployeeByKey (employee, key) {
//     delete employee.name

//     return employee
// }

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name

    return employee
}
