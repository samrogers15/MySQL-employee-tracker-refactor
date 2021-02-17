module.exports = [{
    type: 'rawlist',
    name: 'questions',
    message: 'What would you like to do?',
    choices: [
        {
            name: 'View all departments.',
            value: 'viewAllDepartments'
        },
        {
            name: 'View all roles.',
            value: 'viewAllRoles'
        },
        {
            name: 'View all employees.',
            value: 'viewAllEmployees'
        },
        {
            name: 'View all employees by manager.',
            value: 'viewAllEmployeesByManager'
        },
        {
            name: 'Add a department.',
            value: 'addADepartment'
        },
        {
            name: 'Add a role.',
            value: 'addARole'
        },
        {
            name: 'Add an employee.',
            value: 'addAnEmployee'
        },
        {
            name: 'Update an employee\'s role',
            value: 'updateEmployeeRole'
        },
        {
            name: 'Update an employee\'s manager',
            value: 'updateEmployeeManager'
        },
        {
            name: 'Remove a department.',
            value: 'removeADepartment'
        },
        {
            name: 'Remove a role.',
            value: 'removeARole'
        },
        {
            name: 'Remove an employee.',
            value: 'removeAnEmployee'
        },
        {
            name: 'View total salary of department.',
            value: 'viewDepartmentSalary'
        },
        {
            name: 'Exit program.',
            value: 'exitProgram'
        }
    ]
}]