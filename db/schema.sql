-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:



-- id: an auto incrementing int that serves as the primary key.

-- burger_name: a string.

-- devoured: a boolean.


CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id AUTO_INCREMENT PRIMARY KEY,

)
	-- id int(10) NOT NULL AUTO_INCREMENT,
	-- burger_name VARCHAR(255) NOT NULL,
	-- devoured BOOLEAN DEFAULT false,
	-- date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	-- PRIMARY KEY (id)