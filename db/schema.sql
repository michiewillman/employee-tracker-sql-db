DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

-- Use UNSIGNED when you can't have negative numbers
CREATE TABLE department (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id) 
);

CREATE TABLE employee (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (role_id)
  REFERENCES role(id),
  manager_id INT UNSIGNED,
  FOREIGN KEY (manager_id)
  REFERENCES employee(id)
  ON DELETE SET NULL
)