-- Sample Inputs for Stores
INSERT INTO Stores (StoreName, StoreLocation, StoreDescription) VALUES
('SuperMart Central', '123 Central Ave, City', 'Largest branch in the city'),
('SuperMart East', '456 East St, City', 'Near the East Park'),
('GreenGrocer West', '789 West Lane, City', 'Best organic products'),
('CityStore North', '101 North Rd, City', 'Open 24/7 for your convenience');


-- Sample Inputs for Products under each category

-- Fruit & Vegetables
INSERT INTO Products (ProductName, Category, Description) VALUES
('Apple', 'Fruits', 'Fresh red apple. 2g.'),
('Orange', 'Fruits', 'Fresh orange. 5g.'),
('Grapes', 'Fruits', 'Fresh purple grapes. 200g.'),

-- Meats
INSERT INTO Products (ProductName, Category, Description) VALUES
('Chicken', 'Meat', 'Fresh chicken breast. 500g.');
('Lamb Chops', 'Meat', 'Fresh lamb chops. 250g.');
('Salmon', 'Meat', 'Red salmon cut fillets. 500g.');

-- Dairy
INSERT INTO Products (ProductName, Category, Description) VALUES
('Milk', 'Dairy, Eggs & Fridge', 'Fresh cow milk. 1L.'),
('Butter', 'Dairy, Eggs & Fridge', 'Creamy salted butter. 250g.'),
('Eggs', 'Dairy, Eggs & Fridge', 'Farm fresh eggs. Pack of 12.');

-- Bakery
INSERT INTO Products (ProductName, Category, Description) VALUES
('Bread', 'Bakery', 'Soft white bread. 500g.'),
('Donuts', 'Bakery', 'Chocolate glazed donuts. Pack of 6.'),
('Muffins', 'Bakery', 'Blueberry muffins. Pack of 4.');

-- Deli
INSERT INTO Products (ProductName, Category, Description) VALUES
('Ham', 'Deli', 'Smoked ham slices. 250g.'),
('Cheese', 'Deli', 'Cheddar cheese slices. 250g.'),
('Salami', 'Deli', 'Italian salami slices. 200g.');

-- Pantry
INSERT INTO Products (ProductName, Category, Description) VALUES
('Rice', 'Pantry', 'White jasmine rice. 1kg.'),
('Pasta', 'Pantry', 'Italian penne pasta. 500g.'),
('Olive Oil', 'Pantry', 'Extra virgin olive oil. 500ml.');

-- Drinks
INSERT INTO Products (ProductName, Category, Description) VALUES
('Water', 'Drinks', 'Mineral water. 1L.'),
('Soda', 'Drinks', 'Carbonated soft drink. 330ml.'),
('Coffee', 'Drinks', 'Instant coffee powder. 200g.');

-- Frozen
INSERT INTO Products (ProductName, Category, Description) VALUES
('Ice Cream', 'Frozen', 'Vanilla ice cream. 1L.'),
('Frozen Pizza', 'Frozen', 'Margherita pizza. 400g.'),
('Frozen Vegetables', 'Frozen', 'Mixed vegetables. 500g.');

-- Household
INSERT INTO Products (ProductName, Category, Description) VALUES
('Detergent', 'Household', 'Laundry detergent. 1L.'),
('Dish Soap', 'Household', 'Lemon scented dish soap. 500ml.'),
('Paper Towels', 'Household', 'Absorbent paper towels. Pack of 2.');

-- Health & Beauty
INSERT INTO Products (ProductName, Category, Description) VALUES
('Shampoo', 'Health & Beauty', 'Refreshing mint shampoo. 500ml.'),
('Toothpaste', 'Health & Beauty', 'Whitening toothpaste. 100g.'),
('Deodorant', 'Health & Beauty', 'Roll-on deodorant. 50ml.');


-- ProductPrices for the new products
INSERT INTO ProductPrices (ProductID, StoreID, Price) VALUES
(1, 1, 1.25),
(1, 2, 1.20),
(2, 3, 1.50),
(3, 4, 0.80);
(4, 1, 3.0);
(4, 2, 1.65);
(4, 3, 1.1);
(4, 4, 2.92);
(5, 1, 0.99);
(5, 2, 1.63);
(5, 3, 2.54);
(5, 4, 1.49);
(6, 1, 2.61);
(6, 2, 1.95);
(6, 3, 2.17);
(6, 4, 1.09);
(7, 1, 6.28);
(7, 2, 4.08);
(7, 3, 11.72);
(7, 4, 11.55);
(8, 1, 6.17);
(8, 2, 5.86);
(8, 3, 5.44);
(8, 4, 11.35);
(9, 1, 8.58);
(9, 2, 10.03);
(9, 3, 11.35);
(9, 4, 8.38);
(10, 1, 1.81);
(10, 2, 1.72);
(10, 3, 1.3);
(10, 4, 2.23);
(11, 1, 2.44);
(11, 2, 4.0);
(11, 3, 1.9);
(11, 4, 2.31);
(12, 1, 1.27);
(12, 2, 3.87);
(12, 3, 1.8);
(12, 4, 1.37);
(13, 1, 2.12);
(13, 2, 1.73);
(13, 3, 3.52);
(13, 4, 1.12);
(14, 1, 4.98);
(14, 2, 4.9);
(14, 3, 4.45);
(14, 4, 4.09);
(15, 1, 2.56);
(15, 2, 1.72);
(15, 3, 3.27);
(15, 4, 1.69);
(16, 1, 4.02);
(16, 2, 5.15);
(16, 3, 4.33);
(16, 4, 7.45);
(17, 1, 5.08);
(17, 2, 5.18);
(17, 3, 2.89);
(17, 4, 6.57);
(18, 1, 3.42);
(18, 2, 5.88);
(18, 3, 2.72);
(18, 4, 7.5);
(19, 1, 4.66);
(19, 2, 2.98);
(19, 3, 4.17);
(19, 4, 5.25);
(20, 1, 1.58);
(20, 2, 1.25);
(20, 3, 3.56);
(20, 4, 4.94);
(21, 1, 3.79);
(21, 2, 2.59);
(21, 3, 3.17);
(21, 4, 1.72);
(22, 1, 3.36);
(22, 2, 1.33);
(22, 3, 2.64);
(22, 4, 1.34);
(23, 1, 2.97);
(23, 2, 2.19);
(23, 3, 3.57);
(23, 4, 3.24);
(24, 1, 1.34);
(24, 2, 1.51);
(24, 3, 2.93);
(24, 4, 1.76);
(25, 1, 5.91);
(25, 2, 5.65);
(25, 3, 4.92);
(25, 4, 4.28);
(26, 1, 4.98);
(26, 2, 3.41);
(26, 3, 2.8);
(26, 4, 5.25);
(27, 1, 3.33);
(27, 2, 4.4);
(27, 3, 4.16);
(27, 4, 2.29);