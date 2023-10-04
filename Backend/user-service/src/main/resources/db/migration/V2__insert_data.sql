USE userdb;

-- Sample Inputs for Users
INSERT INTO Users (FirstName, LastName, Username, Password, Email, Notifications, CardName, CardNumber, CardExpiration, CardCVV) VALUES
('alice', '123', 'alice123', 'password123', 'alice@email.com', 0, '', 0, '', 0),
('bob', '456', 'bob456', 'mypassword456', 'bob@email.net', 0, '', 0, '', 0),
('charlie', '789', 'charlie789', 'secure789', 'charlie@email.org', 0, '', 0, '', 0),
('david', '101', 'david101', 'topsecret101', 'david@email.co', 0, '', 0, '', 0);

