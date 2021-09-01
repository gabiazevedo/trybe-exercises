CREATE DATABASE IF NOT EXISTS Gab_Zoo;

USE Gab_Zoo;

CREATE TABLE Animals(
  animal_id INT PRIMARY KEY AUTO_INCREMENT,
  animal_name VARCHAR(50) NOT NULL,
  specie VARCHAR(100) NOT NULL,
  sex VARCHAR(50) NOT NULL,
  age INT NOT NULL,
  location VARCHAR(50) NOT NULL
);

CREATE TABLE Managers(
  manager_id INT PRIMARY KEY AUTO_INCREMENT,
  manager_name VARCHAR(50) NOT NULL
);

CREATE TABLE Caregivers(
  caregiver_id INT PRIMARY KEY AUTO_INCREMENT,
  caregiver_name VARCHAR(50) NOT NULL,
  manager_id INT NOT NULL,
  FOREIGN KEY (manager_id) REFERENCES Managers (manager_id)
);


CREATE TABLE Animals_Caregivers(
  animal_id INT,
  caregiver_id INT,
  CONSTRAINT PRIMARY KEY(animal_id, caregiver_id),
  FOREIGN KEY (animal_id) REFERENCES Animals (animal_id),
  FOREIGN KEY (caregiver_id) REFERENCES Caregivers (caregiver_id)
);
