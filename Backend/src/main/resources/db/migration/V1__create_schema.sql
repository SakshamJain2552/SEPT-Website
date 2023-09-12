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

-- -----------------------------------------------------
-- Table Carts
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Carts (
  CartID INT AUTO_INCREMENT PRIMARY KEY,
  UserID INT,
  DateCreated VARCHAR(255) NOT NULL,
  CONSTRAINT FK_UserID FOREIGN KEY (UserID) REFERENCES Users(UserID)
);

-- -----------------------------------------------------
-- Table Products
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Products (
  ProductID INT AUTO_INCREMENT PRIMARY KEY,
  ProductName VARCHAR(255) NOT NULL,
  Category TEXT,
  Description TEXT,
  Image BLOB
);

-- -----------------------------------------------------
-- Table CartItems
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS CartItems (
  CartItemID INT AUTO_INCREMENT PRIMARY KEY,
  CartID INT,
  ProductID INT,
  Quantity INT NOT NULL,
  CONSTRAINT FK_CartID FOREIGN KEY (CartID) REFERENCES Carts(CartID),
  CONSTRAINT FK_ProductID FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- -----------------------------------------------------
-- Table Stores
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Stores (
  StoreID INT AUTO_INCREMENT PRIMARY KEY,
  StoreName VARCHAR(255) NOT NULL,
  StoreLocation TEXT,
  StoreDescription TEXT
);

-- -----------------------------------------------------
-- Table ProductPrices
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ProductPrices (
  ProductPriceID INT AUTO_INCREMENT PRIMARY KEY,
  ProductID INT,
  StoreID INT,
  Price DOUBLE NOT NULL,
  CONSTRAINT FK_ProductID_Price FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
  CONSTRAINT FK_StoreID_Price FOREIGN KEY (StoreID) REFERENCES Stores(StoreID)
);

-- -----------------------------------------------------
-- Table Reviews
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Reviews (
  ReviewID INT AUTO_INCREMENT PRIMARY KEY,
  UserID INT,
  ProductID INT,
  StoreID INT,
  Rating INT NOT NULL,
  Comment TEXT,
  DatePosted VARCHAR(255) NOT NULL,
  CONSTRAINT FK_UserID_Review FOREIGN KEY (UserID) REFERENCES Users(UserID),
  CONSTRAINT FK_ProductID_Review FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
  CONSTRAINT FK_StoreID_Review FOREIGN KEY (StoreID) REFERENCES Stores(StoreID)
);
