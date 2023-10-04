-- H2 SQL Script for Flyway
-- Compatible with MySQL and H2

-- Use AUTO_INCREMENT for H2
-- MySQL uses AUTO_INCREMENT, while H2 uses IDENTITY

-- -----------------------------------------------------
-- Table Users
-- -----------------------------------------------------
USE deliverydb;

CREATE TABLE IF NOT EXISTS Users (
  UserID INT AUTO_INCREMENT PRIMARY KEY,
  Username VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  CONSTRAINT UQ_Username UNIQUE (Username),
  CONSTRAINT UQ_Email UNIQUE (Email)
);

-- -----------------------------------------------------
-- Table Delivery
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Deliveries (
    DeliveryID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    DeliveryAddress VARCHAR(255) NOT NULL,
    DeliveryDate VARCHAR(255) NOT NULL,
    DeliveryTime VARCHAR(255) NOT NULL,
    PaymentMethod VARCHAR(255) NOT NULL,
    CONSTRAINT FK_Username_Order FOREIGN KEY (Username) REFERENCES Users(Username)
)