/*drop table Customer;

drop table lineleap;

drop table location;

drop table teams;

drop table employee;*/

CREATE TABLE Customer(
customer_id VARCHAR(10),
first_name VARCHAR(30),
last_name VARCHAR(30),
birthdate Character(20),
email VARCHAR(50),
zip_code character(10),
credit_card_number VARCHAR(20),
PRIMARY KEY(customer_id));

CREATE TABLE Teams(
team_id VARCHAR(10),
time_in VARCHAR(15),
time_out VARCHAR(15),
PRIMARY KEY(team_id));

CREATE TABLE Location(
bar_id VARCHAR(10),
title VARCHAR(20),
bar_capacity VARCHAR(5),
num_customers VARCHAR(5),
num_employees VARCHAR(5),
team_id VARCHAR (10),
address VARCHAR(50),
city VARCHAR(30),
zip_code Character(9),
PRIMARY KEY(bar_id),
Constraint fk_belongsTo_teams
FOREIGN KEY(team_id) REFERENCES teams(team_id));

CREATE TABLE LineLeap(
receipt_num VARCHAR(10),
credit_card VARCHAR(16),
billing_address VARCHAR(30),
item_quantity VARCHAR(10),
reservation_time VARCHAR(20),
customer_id VARCHAR(10),
bar_id VARCHAR(10),
PRIMARY KEY(receipt_num),
Constraint fk_belongsTo_customer
FOREIGN KEY(customer_id) REFERENCES customer(customer_id),
Constraint fk_belongsTo_location
FOREIGN KEY(bar_id) REFERENCES location(bar_id));

CREATE TABLE Employee(
employee_id VARCHAR(10),
first_name VARCHAR(30),
last_name VARCHAR(30),
position VARCHAR(20),
team_id VARCHAR(10),
PRIMARY KEY(employee_id),
Constraint fk_belongsTo_team
FOREIGN KEY(team_id) REFERENCES teams(team_id));

use gold04_database;

select * from customer;

select * from teams;

select * from employee;

select * from location;

select * from lineleap;

#Q1: Report the number of occupants at Mike’s and Bogie's at 12:00:00 PM.
Select sum(l.item_quantity + b.num_employees) as "Occupants", b.title, l.reservation_time as “Time”
FROM lineleap l, location b
Where l.bar_id = b.bar_id
AND b.title = "Bogie\'s"
AND l.reservation_time = "12:00:00 PM";

#Q2: Which bars employ the most bartenders? 
Select l.title, e.position, count(e.position = "bartender") as "Bartender Count"
FROM location l, employee e
Where l.team_id= e.team_id
AND e.position = "bartender"
GROUP BY l.title DESC;

#Q3: Which locations can host the most customers?
SELECT b.title, b.num_customers as "Customer Capacity"
FROM location b
ORDER BY b.num_customers DESC;

#Q4: For each location in Tigerland, list the SUM of employees in each team, Order By bar name 
Select b.title, e.team_id, count(e.employee_id) as "Employee Count"
from teams t, location b, employee e
WHERE t.team_id = b.team_id
AND e.team_id = t.team_id
GROUP BY e.team_id;

#Q5: List the capacity limit for each venue that can hold more than 65 people and group By city.
SELECT b.city, b.title, b.bar_capacity
FROM location b
GROUP BY b.city HAVING b.bar_capacity > 65;

#Q6: List customer's credit card number and billing address and group by zip codes greater than 60000 
SELECT c.zip_code as "Zip Code", c.credit_card_number as "Credit Card", c.first_name as "First Name", c.last_name as "Last Name", a.billing_address as "Address"
FROM customer c, lineleap a
WHERE c.credit_card_number = a.credit_card
AND c.customer_id = a.customer_id
GROUP BY c.zip_code HAVING c.zip_code > 60000;

# Q7: List all customers whose email is contains hotmail.com and went to The Boot
SELECT c.first_name, c.last_name, c.email, b.title
FROM customer c, lineleap l, location b
WHERE c.customer_id = l.customer_id
AND l.bar_id = b.bar_id
AND b.title = "The Boot"
AND c.email LIKE "%hotmail.com";

	
# Q8: Which customers did not put their real date of birth and which bar did they attend? 
SELECT str_to_date(birthdate, '%c/%e/%Y') as "Birthdate", first_name, last_name, b.title
FROM customer c, lineleap l, location b
WHERE str_to_date(birthdate, '%c/%e/%Y') < '1930' # used google in order to figure how to convert string values to date values in order to use date value.
AND c.customer_id = l.customer_id
AND l.bar_id = b.bar_id;
	
# Q9: List number of employees working IN time after 7pm
SELECT count(e.employee_id) as "Number of Employees", t.time_in
FROM location l, teams t, employee e
WHERE l.team_id = t.team_id
AND t.team_id = e.team_id
AND t.team_id in ('700');
		
# Q10: List Reservation times later than 11pm Order by customer ID, DESC
		Select*/