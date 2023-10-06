-- H2 SQL Script for Flyway
-- Compatible with MySQL and H2

-- Use AUTO_INCREMENT for H2
-- MySQL uses AUTO_INCREMENT, while H2 uses IDENTITY

-- -----------------------------------------------------
-- Table Users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Users (
  UserID INT AUTO_INCREMENT PRIMARY KEY,
  FirstName VARCHAR(255) NOT NULL,
  LastName VARCHAR(255) NOT NULL,
  Username VARCHAR(255) NOT NULL,
  Password VARCHAR(255) NOT NULL,
  Email VARCHAR(255) NOT NULL,
  Notifications BOOLEAN NOT NULL,
  CardName VARCHAR(255),
  CardNumber BIGINT,
  CardExpiration VARCHAR(255),
  CardCVV INT,
  CONSTRAINT UQ_Username UNIQUE (Username),
  CONSTRAINT UQ_Email UNIQUE (Email)
);

-- Table: Carts
CREATE TABLE Carts (
    CartID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    DateCreated TEXT NOT NULL,
    FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- Table: CartItems
CREATE TABLE CartItems (
    CartItemID INT AUTO_INCREMENT PRIMARY KEY,
    CartID INT,
    ProductID INT,
    StoreName VARCHAR(255),
    Quantity INT NOT NULL,
    FOREIGN KEY (CartID) REFERENCES Carts(CartID)
);
