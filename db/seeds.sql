INSERT INTO departments (name) 
VALUES ("Customer Service"), ("Sales"),( "Finance"), ("Marketing"), ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES ("Customer Support", 60000, 1),
("Sales Representative", 55000, 2),
("Financial Advisor", 110000, 3),
("Senior Designer", 75000, 4),
("Marketing Coordinator", 50000, 4),
("Software Engineer", 120000, 5),
("Director Engineering", 240000, 5),
("Director Sales", 290000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Greg", "Harbour", 1, 7),
("Chelsea", "Rudd", 2, 8),
("Karen", "McCormick", 3, 6),
("Dave", "Dawson", 4, 7),
("Olivia", "Stonish", 5, 8),
("Shane", "Anderson", 6, 7),
("Jonathan", "Hyde", 7, 8),
("Alexander", "Merritt", 8, 7);

-- Getting error...
-- ERROR 1452 (23000): Cannot add or update a child row: a foreign key constraint fails (`employee_db`.`employees`, CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE)