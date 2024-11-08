CREATE DATABASE food_db;

-- creating tables
USE food_db;
CREATE TABLE deliveries (
delivery_id INT PRIMARY KEY AUTO_INCREMENT,
donor_id INT,
beneficiary_id INT,
delivery_date DATE NOT NULL);

CREATE TABLE donors (
donor_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
email_address VARCHAR(50),
donation_date DATE NOT NULL);

CREATE TABLE beneficiaries (
beneficiary_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
email_address VARCHAR(50),
location VARCHAR(50));

CREATE TABLE foodtypes (
foodtype_id INT PRIMARY KEY AUTO_INCREMENT,
food_name VARCHAR(50),
category VARCHAR(50),
expiry_date DATE NOT NULL);
