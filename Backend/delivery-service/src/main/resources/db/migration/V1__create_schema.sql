-- H2 SQL Script for Flyway
-- Compatible with MySQL and H2

-- Use AUTO_INCREMENT for H2
-- MySQL uses AUTO_INCREMENT, while H2 uses IDENTITY
-- -----------------------------------------------------
-- USE deliverydb;

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
    CONSTRAINT UQ_DeliveryID UNIQUE (DeliveryID)
);