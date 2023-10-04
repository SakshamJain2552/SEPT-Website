USE productdb; 

-- -----------------------------------------------------
-- Table Products
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(255) NOT NULL,
    Category TEXT,
    Description TEXT,
    Image BLOB);

-- -----------------------------------------------------
-- Table Stores
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Stores (
    StoreID INT AUTO_INCREMENT PRIMARY KEY,
    StoreName VARCHAR(255) NOT NULL,
    StoreLocation TEXT,
    StoreDescription TEXT);

-- -----------------------------------------------------
-- Table ProductPrices
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS ProductPrices (
    ProductPriceID INT AUTO_INCREMENT PRIMARY KEY,
    ProductID INT,
    StoreID INT,
    Price DOUBLE NOT NULL,
    CONSTRAINT FK_ProductID_Price FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    CONSTRAINT FK_StoreID_Price FOREIGN KEY (StoreID) REFERENCES Stores(StoreID));

-- -----------------------------------------------------
-- Table UserRating
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS UserRating (
    RatingID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    ProductID INT,
    StoreName VARCHAR(255) NOT NULL,
    ReviewInteger DOUBLE);


