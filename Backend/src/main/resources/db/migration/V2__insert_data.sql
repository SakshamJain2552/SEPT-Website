-- Sample Inputs for Users
INSERT INTO Users (Username, Password, Email) VALUES
('alice123', 'password123', 'alice@email.com'),
('bob456', 'mypassword456', 'bob@email.net'),
('charlie789', 'secure789', 'charlie@email.org'),
('david101', 'topsecret101', 'david@email.co');

-- Sample Inputs for Stores
INSERT INTO Stores (StoreName, StoreLocation, StoreDescription) VALUES
('SuperMart Central', '123 Central Ave, City', 'Largest branch in the city'),
('SuperMart East', '456 East St, City', 'Near the East Park'),
('GreenGrocer West', '789 West Lane, City', 'Best organic products'),
('CityStore North', '101 North Rd, City', 'Open 24/7 for your convenience');

-- Sample Inputs for Products
INSERT INTO Products (ProductName, Category, Description) VALUES
('Milk', 'Dairy', 'Fresh whole milk. 1L.'),
('Bread', 'Bakery', 'Whole grain bread. 500g.'),
('Apple', 'Fruits', 'Crisp and sweet. Per Kg.'),
('Chicken', 'Meat', 'Fresh chicken breast. 500g.');

-- (Assuming IDs are assigned sequentially starting from 1 for each table)

-- Sample Inputs for Carts
INSERT INTO Carts (UserID, DateCreated) VALUES
(1, '2023-09-12'),
(2, '2023-09-11'),
(3, '2023-09-10'),
(4, '2023-09-09');

-- Sample Inputs for CartItems (using carts and products from above)
INSERT INTO CartItems (CartID, ProductID, Quantity) VALUES
(1, 1, 2),
(1, 2, 1),
(2, 3, 5),
(2, 4, 2);

-- Sample Inputs for ProductPrices (using products and stores from above)
INSERT INTO ProductPrices (ProductID, StoreID, Price) VALUES
(1, 1, 1.25),
(1, 2, 1.20),
(2, 3, 1.50),
(3, 4, 0.80);

-- Sample Inputs for Reviews (using users, products, and stores from above)
INSERT INTO Reviews (UserID, ProductID, StoreID, Rating, Comment, DatePosted) VALUES
(1, 1, 1, 5, 'Great quality!', '2023-09-12'),
(2, 2, 3, 4, 'Good, but a bit pricey.', '2023-09-11'),
(3, 3, 4, 3, 'Just okay.', '2023-09-10'),
(4, 4, 1, 5, 'Always fresh!', '2023-09-09');
