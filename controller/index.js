const inquirer = require('inquirer');
const db = require('../model/db');
const displayInfo = require('../view');

const controller = {

    async viewAllDepartments() {
        const departments = await db.viewAllDepartments();
        displayInfo(departments);
    },

    async viewAllRoles() {
        const roles = await db.viewAllRoles();
        displayInfo(roles);
    },

    async viewAllEmployees() {
        const employees = await db.viewAllEmployees();
        displayInfo(employees);
    },

    async addADepartment() {
        const departments = await db.viewAllDepartments();
        const deptDetailQs = [
            {
                name: 'newDept',
                type: 'input',
                message: 'What is the name of the department you want to add?'   
            }
        ]
        const answers = await inquirer.prompt(deptDetailQs);
        await db.addToTable('department', answers)
    },

    async addARole() {
        const departments = await db.viewAllDepartments();
        const roleDetailQs = [
            {
                name: 'title',
                type: 'input',
                message: 'What is the name of the role you want to add?'   
                },
                {
                name: 'salary',
                type: 'input',
                message: 'What is the salary of the role you want to add?'   
                },
                {
                name: 'deptName',
                type: 'rawlist',
                message: 'Which department do you want to add the new role to?',
                choices: departments.map(dep => ({name: department.department_name, value: department.department_id}))
            },
        ]
        const answers = await inquirer.prompt(roleDetailQs);
        await db.addToTable('role', answers)
        console.log(`\n ${answers.title} was successfully added as a new role into the database.\n`)
    },

    async addAnEmployee() {
        const employees = await db.viewAllEmployees();
        const roles = await db.viewAllRoles();
        const employeeDetailQs = [
            {
                name: 'firstName',
                type: 'input',
                message: 'What is the new employee\'s first name?'
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'What is the new employee\'s last name?'
            },
            {
                name: 'role',
                type: 'rawlist',
                message: 'What is the new employee\'s title?',
                choices: roles.map(role => ({name: role.title, value: role.role_id}))
            },
            {
                name: 'manager',
                type: 'rawlist',
                message: 'Who is the new employee\'s manager?',
                choices: employees.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id}))
            }
        ]
        const answers = await inquirer.prompt(employeeDetailQs);
        await db.addToTable('employee', answers)
        console.log(`\n ${answers.first_name} ${answers.last_name} was successfully added as a new role into the database.\n`)
    },

    async updateEmployeeRole() {
        const employees = await db.viewAllEmployees();
        const roles = await db.viewAllRoles();
        const employeeRoleDetailQs = [
            {
                name: 'employee',
                type: 'rawlist',
                message: 'Which employee would you like to update the role for?',
                choices: employees.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id}))
            },
            {
                name: 'newRole',
                type: 'rawlist',
                message: 'What should the employee\'s new role be?',
                choices: roles.map(role => ({name: role.title, value: role.role_id}))
            },
        ]
        const answers = await inquirer.prompt(employeeRoleDetailQs);
        await db.updateEmployeeRole('roles', answers.newRole, answers.employee)
        console.log(`\n Successfully updated employee's role in the database! \n`);
    },

    async updateEmployeeManager() {
        const employees = await db.viewAllEmployees();
        const employeeManagerDetailQs = [
            {
                name: 'employee',
                type: 'rawlist',
                message: 'Which employee would you like to update the manager for?',
                choices: employees.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id}))
            },
            {
                name: 'newManager',
                type: 'rawlist',
                message: 'Who should the employee\'s new manager be?',
                choices: employees.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id}))
            },
        ]
        const answers = await inquirer.prompt(employeeManagerDetailQs);
        await db.updateEmployeeManager('employee',answers.newManager, answers.employee)
        console.log(`\n Successfully updated employee's manager in the database! \n`);
    },

    async removeADepartment() {
        const departments = await db.viewAllDepartments();
        const departmentRemovalQ = [
            {
                name: 'deptName',
                type: 'rawlist',
                message: 'Which department would you like to remove?',
                choices: departments.map(dep => ({name: department.department_name, value: department.department_id}))
            }
        ]
        const answers = await inquirer.prompt(departmentRemovalQ);
        await db.removeFromTable('department', answers.deptName)
        console.log(`\n Successfully removed department from the database! \n`);
    },

    async removeARole() {
        const roles = await db.viewAllRoles();
        const roleRemovalQ = [
            {
                name: 'title',
                type: 'rawlist',
                message: 'Which role would you like to remove?',
                choices: roles.map(role => ({name: role.title, value: role.role_id}))
            }
        ]
        const answers = await inquirer.prompt(roleRemovalQ);
        await db.removeFromTable('role', answers.title)
        console.log(`\n Successfully removed role from the database! \n`);
    },

    async removeAnEmployee() {
        const employees = await db.viewAllEmployees();
        const employeeRemovalQ = [
            {
                name: 'employee',
                type: 'rawlist',
                message: 'Which employee would you like to remove?',
                choices: employees.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id}))
            }
        ]
        const answers = await inquirer.prompt(employeeRemovalQ);
        await db.removeFromTable('employee', answers.employee)
        console.log(`\n Successfully removed employee from the database! \n`);
    },

    async viewDepartmentSalary() {
        const departments = await db.viewAllDepartments();
        const departmentSalaryQ = [
            {
                name: 'deptName',
                type: 'rawlist',
                message: 'Which department would you like to view the total salaries of?',
                choices: departments.map(dep => ({name: department.department_name, value: department.department_id}))
            }
        ]
        const answers = await inquirer.prompt(departmentSalaryQ);
        const salary = await db.viewDepartmentSalary(answers.deptName);
        displayInfo(salary);
    }
}

module.exports = controller;