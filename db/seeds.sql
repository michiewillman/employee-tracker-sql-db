INSERT INTO department (name) 
VALUES ("Customer Service"), ("Sales"),( "Finance"), ("Marketing"), ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Customer Support", 60000, 1),
("Sales Representative", 55000, 2),
("Financial Advisor", 110000, 3),
("Senior Designer", 75000, 4),
("Marketing Coordinator", 50000, 4),
("Software Engineer", 120000, 5),
("Director Engineering", 240000, 5),
("Director Sales", 290000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Greg", "Harbour", 8, null),
("Chelsea", "Rudd", 7, null),
("Karen", "McCormick", 3, 1),
("Dave", "Dawson", 4, 2),
("Olivia", "Stonish", 5, 1),
("Shane", "Anderson", 6, 1);
