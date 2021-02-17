const connection = require('./connection');

module.exports = {

    viewAllDepartments() {
        return connection.query(`SELECT * FROM department ORDER BY id ASC`)
    },

    viewAllRoles() {
        return connection.query(`SELECT role.id, role.title, role.salary, department.department_name, department.id FROM role JOIN department ON role.department_id = department.id ORDER BY role.id ASC;`)
    },

    viewAllEmployees() {
        return connection.query(`SELECT e.id, e.first_name, e.last_name, role.title, department.department_name, role.salary, CONCAT(m.first_name, ' ', m.last_name) manager FROM employee m RIGHT JOIN employee e ON e.manager_id = m.id JOIN role ON e.role_id = role.id JOIN department ON department.id = role.department_id ORDER BY e.id ASC;`)
    },

    viewAllEmployeesByManager(manager) {
        return connection.query(`SELECT e.id, e.first_name, e.last_name, role.title, department.department_name, role.salary, CONCAT(m.first_name, ' ', m.last_name) manager FROM employee m RIGHT JOIN employee e ON e.manager_id = m.id JOIN role ON e.role_id = role.id JOIN department ON department.id = role.department_id WHERE e.manager_id = ${manager} ORDER BY e.id ASC;`)
    },

    addToTable(table, data) {
        return connection.query(`INSERT INTO ${table} SET ?`, data)
    },
    
    removeFromTable(table, id) {
        return connection.query(`DELETE FROM ${table} WHERE id = ?`, id)
    },

    updateEmployeeRole(table, id, data) {
        return connection.query(`UPDATE ${table} SET role_id = ? WHERE id = ?`, id, data)
    },

    updateEmployeeManager(table, id, data) {
        return connection.query(`UPDATE ${table} SET manager_id = ? WHERE id = ?`, id, data)
    },

    viewDepartmentSalary(id) {
        return connection.query(`SELECT department_id, SUM(role.salary) AS total_salary FROM role WHERE ?`, id)
    }
}