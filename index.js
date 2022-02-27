

// Write your solution in this file!
const employee = {
    name: "Christopher Kim",
    streetAddress: "555 Gorge Road", 
    
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, 
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;


}


function deleteFromEmployeeByKey(employee, key) {
    const newEmployees = {...employee};
    delete newEmployees[key];
    return newEmployees;

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
