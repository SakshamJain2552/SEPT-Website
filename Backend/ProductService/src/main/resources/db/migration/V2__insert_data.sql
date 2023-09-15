-- Sample Inputs for Stores
INSERT INTO Stores (StoreName, StoreLocation, StoreDescription) VALUES
('SuperMart Central', '123 Central Ave, City', 'Largest branch in the city'),
('SuperMart East', '456 East St, City', 'Near the East Park'),
('GreenGrocer West', '789 West Lane, City', 'Best organic products'),
('CityStore North', '101 North Rd, City', 'Open 24/7 for your convenience');

-- Sample Inputs for Products
INSERT INTO Products (ProductName, Category, Description) VALUES
('Apple', 'Fruits', 'Fresh red apple. 2g.'),
('Orange', 'Fruits', 'Fresh orange. 5g.'),
('Grapes', 'Fruits', 'Fresh purple grapes. 200g.'),
('Chicken', 'Meat', 'Fresh chicken breast. 500g.');

-- (Assuming IDs are assigned sequentially starting from 1 for each table)

-- Sample Inputs for ProductPrices (using products and stores from above)
INSERT INTO ProductPrices (ProductID, StoreID, Price) VALUES
(1, 1, 1.25),
(1, 2, 1.20),
(2, 3, 1.50),
(3, 4, 0.80);