-- Sample Inputs for Stores
INSERT INTO Stores (StoreName, StoreLocation, StoreDescription) VALUES
('SuperMart Central', '123 Central Ave, City', 'Largest branch in the city'),
('SuperMart East', '456 East St, City', 'Near the East Park'),
('GreenGrocer West', '789 West Lane, City', 'Best organic products'),
('CityStore North', '101 North Rd, City', 'Open 24/7 for your convenience');

-- Fruit & Vegetables
INSERT INTO Products (ProductName, Category, Description) VALUES
('Apple', 'Fruits & Vegetables', 'Fresh red apple. 2g.'),
('Orange', 'Fruits & Vegetables', 'Fresh orange. 5g.'),
('Grapes', 'Fruits & Vegetables', 'Fresh purple grapes. 200g.'),
('Banana', 'Fruits & Vegetables', 'Fresh yellow bananas. 5g.'),
('Pineapple', 'Fruits & Vegetables', 'Fresh pineapple. 1kg.'),
('Broccoli', 'Fruits & Vegetables', 'Fresh green broccoli. 500g.'),
('Carrot', 'Fruits & Vegetables', 'Fresh orange carrots. 500g.');

-- Meats
INSERT INTO Products (ProductName, Category, Description) VALUES
('Chicken', 'Meat & Seafood', 'Fresh chicken breast. 500g.'),
('Lamb Chops', 'Meat & Seafood', 'Fresh lamb chops. 250g.'),
('Salmon', 'Meat & Seafood', 'Red salmon cut fillets. 500g.'),
('Beef', 'Meat & Seafood', 'Fresh beef cuts. 500g.'),
('Pork', 'Meat & Seafood', 'Fresh pork cuts. 300g.'),
('Shrimp', 'Meat & Seafood', 'Fresh shrimps. 250g.'),
('Tuna', 'Meat & Seafood', 'Tuna fillets. 300g.');

-- Dairy
INSERT INTO Products (ProductName, Category, Description) VALUES
('Milk', 'Dairy, Eggs & Fridge', 'Fresh cow milk. 1L.'),
('Butter', 'Dairy, Eggs & Fridge', 'Creamy salted butter. 250g.'),
('Eggs', 'Dairy, Eggs & Fridge', 'Farm fresh eggs. Pack of 12.'),
('Cheese', 'Dairy, Eggs & Fridge', 'Cheddar cheese. 250g.'),
('Yogurt', 'Dairy, Eggs & Fridge', 'Natural yogurt. 200g.'),
('Cream', 'Dairy, Eggs & Fridge', 'Fresh cream. 200ml.'),
('Ice Cream', 'Dairy, Eggs & Fridge', 'Vanilla ice cream. 500ml.');

-- Bakery
INSERT INTO Products (ProductName, Category, Description) VALUES
('Bread', 'Bakery', 'Soft white bread. 500g.'),
('Donuts', 'Bakery', 'Chocolate glazed donuts. Pack of 6.'),
('Muffins', 'Bakery', 'Blueberry muffins. Pack of 4.'),
('Croissant', 'Bakery', 'Buttery croissant. 100g.'),
('Bagel', 'Bakery', 'Fresh bagel. 100g.'),
('Cake', 'Bakery', 'Chocolate cake. 1kg.'),
('Cookies', 'Bakery', 'Chocolate chip cookies. 200g.');

-- Deli
INSERT INTO Products (ProductName, Category, Description) VALUES
('Ham', 'Deli', 'Smoked ham slices. 250g.'),
('Cheese', 'Deli', 'Cheddar cheese slices. 250g.'),
('Salami', 'Deli', 'Italian salami slices. 200g.'),
('Turkey', 'Deli', 'Smoked turkey slices. 250g.'),
('Roast Beef', 'Deli', 'Roast beef slices. 200g.'),
('Prosciutto', 'Deli', 'Italian prosciutto. 150g.'),
('Tofu', 'Deli', 'Fresh tofu. 250g.');

-- Pantry
INSERT INTO Products (ProductName, Category, Description) VALUES
('Rice', 'Pantry', 'White jasmine rice. 1kg.'),
('Pasta', 'Pantry', 'Italian penne pasta. 500g.'),
('Olive Oil', 'Pantry', 'Extra virgin olive oil. 500ml.'),
('Cereal', 'Pantry', 'Breakfast cereal. 500g.'),
('Jam', 'Pantry', 'Strawberry jam. 250g.'),
('Peanut Butter', 'Pantry', 'Creamy peanut butter. 500g.'),
('Tea', 'Pantry', 'Green tea bags. Pack of 20.');

-- Drinks
INSERT INTO Products (ProductName, Category, Description) VALUES
('Water', 'Drinks', 'Mineral water. 1L.'),
('Soda', 'Drinks', 'Carbonated soft drink. 330ml.'),
('Coffee', 'Drinks', 'Instant coffee powder. 200g.'),
('Juice', 'Drinks', 'Orange juice. 1L.'),
('Wine', 'Drinks', 'Red wine. 750ml.'),
('Champagne', 'Drinks', 'Sparkling champagne. 750ml.'),
('Tea', 'Drinks', 'Green tea. 200g.');

-- Frozen
INSERT INTO Products (ProductName, Category, Description) VALUES
('Ice Cream', 'Frozen', 'Vanilla ice cream. 1L.'),
('Frozen Pizza', 'Frozen', 'Margherita pizza. 400g.'),
('Frozen Vegetables', 'Frozen', 'Mixed vegetables. 500g.'),
('Frozen Berries', 'Frozen', 'Mixed berries. 500g.'),
('Frozen Fish', 'Frozen', 'Fish fillets. 500g.'),
('Ice Cubes', 'Frozen', 'Pack of ice cubes.'),
('Frozen Pies', 'Frozen', 'Assorted mini pies. 500g.');

-- Health & Beauty
INSERT INTO Products (ProductName, Category, Description) VALUES
('Shampoo', 'Health & Beauty', 'Refreshing mint shampoo. 500ml.'),
('Toothpaste', 'Health & Beauty', 'Whitening toothpaste. 100g.'),
('Deodorant', 'Health & Beauty', 'Roll-on deodorant. 50ml.'),
('Conditioner', 'Health & Beauty', 'Silky conditioner. 500ml.'),
('Soap', 'Health & Beauty', 'Moisturizing soap bar. 100g.'),
('Lotion', 'Health & Beauty', 'Body lotion. 200ml.'),
('Sunscreen', 'Health & Beauty', 'SPF 50 sunscreen. 100ml.');

-- Baby
INSERT INTO Products (ProductName, Category, Description) VALUES
('Baby Diapers', 'Baby', 'Soft absorbent diapers. Pack of 30.'),
('Baby Formula', 'Baby', 'Nutritious baby formula. 1kg.'),
('Baby Wipes', 'Baby', 'Gentle cleansing wipes. Pack of 80.'),
('Baby Soap', 'Baby', 'Gentle baby soap. 100g.'),
('Baby Shampoo', 'Baby', 'No tears shampoo. 200ml.'),
('Baby Lotion', 'Baby', 'Moisturizing baby lotion. 150ml.'),
('Baby Oil', 'Baby', 'Gentle baby oil. 200ml.');

-- Pet
INSERT INTO Products (ProductName, Category, Description) VALUES
('Dog Food', 'Pet', 'Nutritious dog food. 1kg.'),
('Cat Litter', 'Pet', 'Clumping cat litter. 5kg.'),
('Bird Seeds', 'Pet', 'Mixed bird seeds. 500g.'),
('Cat Food', 'Pet', 'Tasty cat food. 1kg.'),
('Fish Food', 'Pet', 'Aquarium fish food. 200g.'),
('Dog Leash', 'Pet', 'Durable dog leash.'),
('Cat Toy', 'Pet', 'Interactive cat toy.');

-- Liquor
INSERT INTO Products (ProductName, Category, Description) VALUES
('Whiskey', 'Liquor', 'Aged 12 years. 750ml.'),
('Red Wine', 'Liquor', 'Cabernet Sauvignon. 750ml.'),
('Beer', 'Liquor', 'Lager beer. 330ml.'),
('Vodka', 'Liquor', 'Clear vodka. 750ml.'),
('Brandy', 'Liquor', 'Aged brandy. 750ml.'),
('Rum', 'Liquor', 'Dark rum. 750ml.'),
('Gin', 'Liquor', 'Dry gin. 750ml.');

-- Tobacco
INSERT INTO Products (ProductName, Category, Description) VALUES
('Cigarettes', 'Tobacco', 'Pack of 20 cigarettes.'),
('Cigar', 'Tobacco', 'Premium hand-rolled cigar.'),
('Pipe Tobacco', 'Tobacco', 'Flavored pipe tobacco. 50g.'),
('Chewing Tobacco', 'Tobacco', 'Quality chewing tobacco. 50g.'),
('Snuff', 'Tobacco', 'Fine ground snuff. 20g.'),
('Hookah Tobacco', 'Tobacco', 'Flavored hookah tobacco. 200g.'),
('E-cigarettes', 'Tobacco', 'Electronic cigarettes. Pack of 5.');


INSERT INTO ProductPrices (ProductID, StoreID, Price) VALUES
(1, 1, 4.78),
(1, 2, 3.32),
(1, 3, 4.45),
(1, 4, 2.78),
(2, 1, 2.98),
(2, 2, 0.86),
(2, 3, 1.29),
(2, 4, 3.97),
(3, 1, 0.82),
(3, 2, 1.31),
(3, 3, 1.09),
(3, 4, 1.58),
(4, 1, 0.62),
(4, 2, 4.6),
(4, 3, 4.62),
(4, 4, 4.69),
(5, 1, 2.87),
(5, 2, 3.93),
(5, 3, 4.26),
(5, 4, 3.27),
(6, 1, 3.41),
(6, 2, 2.06),
(6, 3, 2.69),
(6, 4, 3.59),
(7, 1, 0.52),
(7, 2, 2.96),
(7, 3, 0.8),
(7, 4, 2.32),
(8, 1, 3.96),
(8, 2, 14.72),
(8, 3, 5.46),
(8, 4, 7.17),
(9, 1, 18.64),
(9, 2, 17.98),
(9, 3, 16.84),
(9, 4, 4.73),
(10, 1, 18.96),
(10, 2, 5.38),
(10, 3, 6.16),
(10, 4, 19.46),
(11, 1, 6.54),
(11, 2, 8.43),
(11, 3, 10.55),
(11, 4, 11.1),
(12, 1, 8.84),
(12, 2, 14.62),
(12, 3, 3.5),
(12, 4, 12.21),
(13, 1, 11.31),
(13, 2, 11.4),
(13, 3, 5.91),
(13, 4, 19.98),
(14, 1, 16.53),
(14, 2, 17.37),
(14, 3, 16.67),
(14, 4, 17.74),
(15, 1, 5.78),
(15, 2, 1.21),
(15, 3, 3.06),
(15, 4, 4.69),
(16, 1, 3.7),
(16, 2, 5.93),
(16, 3, 1.29),
(16, 4, 2.0),
(17, 1, 2.02),
(17, 2, 1.91),
(17, 3, 4.12),
(17, 4, 1.31),
(18, 1, 1.01),
(18, 2, 5.44),
(18, 3, 4.85),
(18, 4, 5.93),
(19, 1, 4.57),
(19, 2, 1.4),
(19, 3, 2.91),
(19, 4, 1.67),
(20, 1, 1.08),
(20, 2, 2.72),
(20, 3, 4.61),
(20, 4, 1.66),
(21, 1, 4.81),
(21, 2, 5.51),
(21, 3, 1.12),
(21, 4, 4.19),
(22, 1, 7.4),
(22, 2, 4.88),
(22, 3, 4.49),
(22, 4, 1.63),
(23, 1, 7.58),
(23, 2, 2.98),
(23, 3, 2.14),
(23, 4, 2.24),
(24, 1, 3.73),
(24, 2, 4.93),
(24, 3, 6.07),
(24, 4, 2.15),
(25, 1, 8.51),
(25, 2, 7.97),
(25, 3, 6.04),
(25, 4, 2.58),
(26, 1, 9.96),
(26, 2, 2.85),
(26, 3, 1.35),
(26, 4, 8.0),
(27, 1, 6.14),
(27, 2, 4.11),
(27, 3, 9.68),
(27, 4, 7.82),
(28, 1, 3.15),
(28, 2, 4.12),
(28, 3, 2.41),
(28, 4, 2.99),
(29, 1, 10.25),
(29, 2, 10.9),
(29, 3, 12.29),
(29, 4, 3.71),
(30, 1, 3.02),
(30, 2, 8.51),
(30, 3, 5.07),
(30, 4, 2.31),
(31, 1, 2.67),
(31, 2, 12.48),
(31, 3, 2.56),
(31, 4, 8.61),
(32, 1, 4.99),
(32, 2, 3.74),
(32, 3, 6.51),
(32, 4, 3.78),
(33, 1, 13.75),
(33, 2, 7.11),
(33, 3, 7.12),
(33, 4, 8.53),
(34, 1, 6.67),
(34, 2, 12.88),
(34, 3, 10.22),
(34, 4, 8.7),
(35, 1, 5.87),
(35, 2, 2.57),
(35, 3, 10.87),
(35, 4, 4.18),
(36, 1, 5.62),
(36, 2, 10.57),
(36, 3, 10.62),
(36, 4, 11.94),
(37, 1, 9.4),
(37, 2, 4.38),
(37, 3, 11.65),
(37, 4, 9.52),
(38, 1, 9.73),
(38, 2, 6.52),
(38, 3, 4.68),
(38, 4, 11.9),
(39, 1, 3.87),
(39, 2, 3.42),
(39, 3, 5.72),
(39, 4, 6.98),
(40, 1, 6.68),
(40, 2, 10.47),
(40, 3, 11.83),
(40, 4, 1.15),
(41, 1, 10.17),
(41, 2, 6.91),
(41, 3, 7.38),
(41, 4, 10.54),
(42, 1, 6.98),
(42, 2, 5.33),
(42, 3, 4.18),
(42, 4, 7.92),
(43, 1, 9.38),
(43, 2, 1.22),
(43, 3, 13.85),
(43, 4, 13.25),
(44, 1, 7.94),
(44, 2, 12.48),
(44, 3, 7.17),
(44, 4, 1.49),
(45, 1, 13.88),
(45, 2, 9.45),
(45, 3, 8.02),
(45, 4, 12.33),
(46, 1, 1.35),
(46, 2, 9.65),
(46, 3, 7.94),
(46, 4, 11.0),
(47, 1, 2.95),
(47, 2, 5.9),
(47, 3, 14.02),
(47, 4, 12.02),
(48, 1, 10.85),
(48, 2, 7.55),
(48, 3, 6.9),
(48, 4, 8.25),
(49, 1, 9.87),
(49, 2, 12.81),
(49, 3, 9.7),
(49, 4, 9.91),
(50, 1, 2.55),
(50, 2, 8.26),
(50, 3, 8.17),
(50, 4, 6.21),
(51, 1, 8.24),
(51, 2, 4.07),
(51, 3, 9.13),
(51, 4, 4.1),
(52, 1, 7.01),
(52, 2, 8.64),
(52, 3, 7.06),
(52, 4, 1.9),
(53, 1, 4.68),
(53, 2, 2.84),
(53, 3, 6.66),
(53, 4, 8.06),
(54, 1, 2.66),
(54, 2, 3.14),
(54, 3, 7.44),
(54, 4, 3.11),
(55, 1, 5.33),
(55, 2, 9.94),
(55, 3, 8.11),
(55, 4, 3.44),
(56, 1, 4.54),
(56, 2, 8.5),
(56, 3, 7.75),
(56, 4, 6.46),
(57, 1, 5.33),
(57, 2, 19.33),
(57, 3, 17.05),
(57, 4, 6.94),
(58, 1, 12.57),
(58, 2, 14.52),
(58, 3, 10.89),
(58, 4, 7.22),
(59, 1, 9.51),
(59, 2, 8.95),
(59, 3, 8.87),
(59, 4, 8.38),
(60, 1, 4.24),
(60, 2, 19.86),
(60, 3, 18.35),
(60, 4, 7.79),
(61, 1, 13.81),
(61, 2, 12.35),
(61, 3, 10.83),
(61, 4, 11.76),
(62, 1, 5.91),
(62, 2, 17.88),
(62, 3, 13.28),
(62, 4, 9.66),
(63, 1, 17.7),
(63, 2, 3.38),
(63, 3, 5.71),
(63, 4, 15.15),
(64, 1, 9.18),
(64, 2, 5.71),
(64, 3, 14.06),
(64, 4, 4.67),
(65, 1, 9.72),
(65, 2, 16.73),
(65, 3, 15.29),
(65, 4, 3.53),
(66, 1, 4.02),
(66, 2, 8.11),
(66, 3, 9.13),
(66, 4, 3.75),
(67, 1, 5.76),
(67, 2, 21.03),
(67, 3, 4.23),
(67, 4, 16.98),
(68, 1, 24.43),
(68, 2, 9.58),
(68, 3, 13.66),
(68, 4, 17.66),
(69, 1, 12.81),
(69, 2, 14.72),
(69, 3, 21.7),
(69, 4, 15.67),
(70, 1, 6.49),
(70, 2, 16.32),
(70, 3, 6.41),
(70, 4, 15.54),
(71, 1, 15.1),
(71, 2, 19.4),
(71, 3, 1.59),
(71, 4, 23.75),
(72, 1, 27.03),
(72, 2, 5.46),
(72, 3, 9.94),
(72, 4, 24.66),
(73, 1, 21.77),
(73, 2, 16.26),
(73, 3, 22.02),
(73, 4, 25.88),
(74, 1, 21.68),
(74, 2, 28.69),
(74, 3, 28.8),
(74, 4, 29.42),
(75, 1, 6.94),
(75, 2, 24.37),
(75, 3, 4.02),
(75, 4, 5.23),
(76, 1, 7.87),
(76, 2, 5.02),
(76, 3, 19.48),
(76, 4, 13.23),
(77, 1, 17.02),
(77, 2, 10.33),
(77, 3, 7.58),
(77, 4, 4.65),
(78, 1, 36.0),
(78, 2, 5.04),
(78, 3, 43.44),
(78, 4, 15.46),
(79, 1, 12.89),
(79, 2, 23.02),
(79, 3, 8.36),
(79, 4, 19.44),
(80, 1, 15.87),
(80, 2, 13.02),
(80, 3, 28.42),
(80, 4, 24.64),
(81, 1, 16.89),
(81, 2, 44.17),
(81, 3, 17.4),
(81, 4, 33.86),
(82, 1, 47.59),
(82, 2, 6.46),
(82, 3, 43.81),
(82, 4, 43.09),
(83, 1, 44.29),
(83, 2, 28.18),
(83, 3, 27.49),
(83, 4, 17.73),
(84, 1, 22.03),
(84, 2, 41.65),
(84, 3, 21.82),
(84, 4, 49.63),
(85, 1, 19.43),
(85, 2, 31.31),
(85, 3, 19.45),
(85, 4, 33.03),
(86, 1, 4.66),
(86, 2, 5.83),
(86, 3, 32.74),
(86, 4, 39.35),
(87, 1, 14.71),
(87, 2, 15.33),
(87, 3, 32.93),
(87, 4, 21.29),
(88, 1, 29.77),
(88, 2, 9.98),
(88, 3, 36.49),
(88, 4, 16.32),
(89, 1, 31.54),
(89, 2, 3.2),
(89, 3, 24.24),
(89, 4, 8.75),
(90, 1, 28.34),
(90, 2, 23.02),
(90, 3, 17.72),
(90, 4, 20.04),
(91, 1, 6.62),
(91, 2, 18.62),
(91, 3, 37.62),
(91, 4, 4.32);