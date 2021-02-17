DROP DATABASE IF EXISTS employeeTrackerDB;

CREATE DATABASE employeeTrackerDB;

USE employeeTrackerDB;

CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE role (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

INSERT INTO department (department_name)
VALUES ('Sales'),
('HR'),
('Programming'),
('IT'),
('Executive');

INSERT INTO role (title, salary, department_id)
VALUES('Account Executive', 100000, 1),
('Sr. Account Executive', 150000, 1),
('Sales Director', 200000, 1),
('HR Coordinator', 75000, 2),
('HR Generalist', 85000, 2),
('HR Director', 100000, 2),
('Jr. Developer', 85000, 3),
('Sr. Developer', 125000, 3),
('Programming Director', 225000, 3),
('IT Project Manager', 850000, 4),
('IT Project Director', 100000, 4),
('Chief Executive Officer', 300000, 5),
('Chief Operating Officer', 275000, 5),
('Chief Financial Officer', 275000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Dottie', 'O''Neil', 12, NULL),
('Becky', 'Houlihan', 13, 1),
('April', 'Romper', 14, 1),
('Dale', 'Robson', 3, 2),
('William', 'Louie', 9, 2),
('Carl', 'Cliffbeard', 11, 2),
('Jackie', 'O''Rourke', 6, 2),
('Bob', 'Johnson', 1, 4),
('Frank', 'Dodson', 1, 4),
('Jim', 'Bobson', 2, 4),
('Frankie', 'Codson', 4, 7),
('Bill', 'Brewer', 5, 7),
('Dom', 'Chewer', 5, 7),
('Mary', 'Bronson', 7, 5),
('Sarah', 'Robbie', 8, 5),
('Jeb', 'Johnnygriff', 10, 6),
('Barton', 'Heathcliffscruff', 11, 6);