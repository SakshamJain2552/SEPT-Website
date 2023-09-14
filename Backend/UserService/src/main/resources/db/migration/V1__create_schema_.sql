-- H2 SQL Script for Flyway
-- Compatible with MySQL and H2

-- Use AUTO_INCREMENT for H2
-- MySQL uses AUTO_INCREMENT, while H2 uses IDENTITY

-- -----------------------------------------------------
-- Table Users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Users (
  UserID INT AUTO_INCREMENT PRIMARY KEY,
  Username VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  CONSTRAINT UQ_Username UNIQUE (Username),
  CONSTRAINT UQ_Email UNIQUE (Email)
);
