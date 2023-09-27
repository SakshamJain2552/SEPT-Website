-- Sample Inputs for Users
INSERT INTO Users (Username, Password, Email) VALUES
('alice123', 'password123', 'alice@email.com'),
('bob456', 'mypassword456', 'bob@email.net'),
('charlie789', 'secure789', 'charlie@email.org'),
('david101', 'topsecret101', 'david@email.co');

-- Sample Inputs for OrderDetails
INSERT INTO Deliveries (Username, DeliveryAddress, DeliveryDate, DeliveryTime, PaymentMethod) VALUES
('alice123', '1 Alice Street, Victoria', '01-01-2023', '12:00', 'card'),
('bob456', '2 Bob Street, Victoria', '01-01-2023', '15:00', 'cash'),
('charlie789', '3 Charlie Street, Victoria', '01-01-2023', '09:00', 'card'),
('david101', '4 David Street, Victoria', '01-01-2023', '10:00', 'cash');