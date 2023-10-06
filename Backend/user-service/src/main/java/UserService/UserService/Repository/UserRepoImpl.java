package UserService.UserService.Repository;


import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.naming.spi.DirStateFactory.Result;
import javax.sql.DataSource;

import org.springframework.stereotype.Repository;

import UserService.UserService.Model.User;
import UserService.UserService.Model.Cart;


@Repository
public class UserRepoImpl implements UserRepo {
    private final DataSource dataSource;

    public UserRepoImpl(DataSource dataSource){
        this.dataSource = dataSource;
    }

    @Override
    public boolean userFound(String username, String password) {
        
        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement stm = connection.prepareStatement(
                "SELECT UserID, Username, Password, Email\r\n" + //
                "FROM Users;"
            );

            ResultSet rs = stm.executeQuery();

            System.out.println("Given username and password: " + username + " - " + password);
            while(rs.next()) {
                if (rs.getString(2).equals(username) && rs.getString(3).equals(password)) {
                    System.out.println("Verified: " + rs.getString(2) + " " + rs.getString(3));
                    connection.close();
                    return true;
                }
            }

            connection.close();
            return false;
            
        } catch (SQLException e) {
            throw new RuntimeException("Error in userFound()", e);
        }

    }

    @Override
    public boolean addUser(User user) {
        String firstname = user.firstname();
        String lastname = user.lastname();
        String username = user.username();
        String password = user.password();
        String email = user.email();
        String address = user.address();
        boolean notifications = user.notifications();
        String cardName = user.cardName();
        Long cardNumber = user.cardNumber();
        String cardExpiration = user.cardExpiration();
        int cardCVV = user.cardCVV();
  
        try (Connection connection = dataSource.getConnection()) {
        
            // Check for uniqueness of username and email
            PreparedStatement checkStm = connection.prepareStatement(
                "SELECT UserID FROM Users WHERE Username = ? OR Email = ?"
            );
            checkStm.setString(1, username);
            checkStm.setString(2, email);
            ResultSet rs = checkStm.executeQuery();
            
            if (rs.next()) {
                System.out.println("Username or Email is already in the database.");
                return false;
            }
    
            // Insert new user
            PreparedStatement stm = connection.prepareStatement(
                "INSERT INTO Users (FirstName, LastName, Username, Password, Email, Address, Notifications, CardName, CardNumber, CardExpiration, CardCVV) " + 
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            );
            stm.setString(1, firstname);
            stm.setString(2, lastname);
            stm.setString(3, username);
            stm.setString(4, password);
            stm.setString(5, email);
            stm.setString(6, address);
            stm.setBoolean(7, notifications);
            stm.setString(8, cardName);
            stm.setLong(9, cardNumber);
            stm.setString(10, cardExpiration);
            stm.setInt(11, cardCVV);
            stm.execute();
    
            System.out.println("New user inserted into database.");
            // ... [print user details]
            return true;
    
        } catch (SQLException e) {
            throw new RuntimeException("Error in addUser()", e);
        }
    }

    @Override
    public Map<String, String> getUserDetails(String username) {

        Map<String,String> userDetails = new HashMap<>();

        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement stm = connection.prepareStatement(
                "SELECT * FROM Users;"
            );

            ResultSet rs = stm.executeQuery();

            System.out.println("Given username: " + username);
            while(rs.next()) {
                if (rs.getString(4).equals(username)) {
                    System.out.println("User found: " + rs.getString(2));
                    
                    userDetails.put("UserID", Integer.toString(rs.getInt(1)));
                    userDetails.put("FirstName", rs.getString(2));
                    userDetails.put("LastName", rs.getString(3));
                    userDetails.put("Username", rs.getString(4));
                    userDetails.put("Password", rs.getString(5));
                    userDetails.put("Email", rs.getString(6));
                    userDetails.put("Address", rs.getString(7));
                    userDetails.put("Notifications", Boolean.toString(rs.getBoolean(8)));
                    userDetails.put("CardName", rs.getString(9));
                    userDetails.put("CardNumber", Long.toString(rs.getLong(10)));
                    userDetails.put("CardExpiration", rs.getString(11));
                    userDetails.put("CardCVV", Integer.toString(rs.getInt(12)));

                    connection.close();

                    return userDetails;
                }
            }

            connection.close();
            return null;
            
        } catch (SQLException e) {
            throw new RuntimeException("Error in getUserDetails()", e);
        }
    }

    @Override
public boolean updateUserNotificationPreference(boolean userPreference, String username) {
    try (Connection connection = dataSource.getConnection()) {

        // Update user notification preference
        PreparedStatement stm = connection.prepareStatement(
            "UPDATE Users SET Notifications = ? WHERE Username = ?"
        );
        stm.setBoolean(1, userPreference);
        stm.setString(2, username);

        int affectedRows = stm.executeUpdate();

        if (affectedRows > 0) {
            System.out.println("User notification preference updated.");
            return true;
        } else {
            System.out.println("User not found or no changes made.");
            return false;
        }
    } catch (SQLException e) {
        throw new RuntimeException("Error in updateUserNotificationPreference()", e);
    }
}

    @Override
    public Cart create(Cart cart) {
        try {
            Connection connection = dataSource.getConnection();
    
            // Check if the user exists
            PreparedStatement checkUserStmt = connection.prepareStatement(
                "SELECT UserID FROM Users WHERE UserID = ?;"
            );
            checkUserStmt.setLong(1, cart.userId);
            ResultSet userResult = checkUserStmt.executeQuery();
    
            if (!userResult.next()) {
                // User does not exist
                connection.close();
                throw new SQLException("User not found");
            }
    
            // Check if a cart already exists for the user
            PreparedStatement checkCartStmt = connection.prepareStatement(
                "SELECT CartID FROM Carts WHERE UserID = ?;"
            );
            checkCartStmt.setLong(1, cart.userId);
            ResultSet cartResult = checkCartStmt.executeQuery();
    
            long cartId;
    
            if (cartResult.next()) {
                // Cart exists, retrieve the CartID
                cartId = cartResult.getLong("CartID");
            } else {
                // Cart does not exist, create a new cart entry
                PreparedStatement createCartStmt = connection.prepareStatement(
                    "INSERT INTO Carts (UserID, DateCreated) VALUES (?, ?);",
                    PreparedStatement.RETURN_GENERATED_KEYS
                );
                createCartStmt.setLong(1, cart.userId);
                createCartStmt.setString(2, cart.dateCreated);
                createCartStmt.executeUpdate();
    
                ResultSet generatedKeys = createCartStmt.getGeneratedKeys();
                if (generatedKeys.next()) {
                    cartId = generatedKeys.getLong(1);
                } else {
                    throw new SQLException("Creating cart failed, no generated key obtained.");
                }
            }
    
            // Create entries for cart items
            PreparedStatement createCartItemStmt = connection.prepareStatement(
                "INSERT INTO CartItems (CartID, ProductID, StoreName, Quantity) VALUES (?, ?, ?, ?);",
                PreparedStatement.RETURN_GENERATED_KEYS
            );
            createCartItemStmt.setLong(1, cartId);
            createCartItemStmt.setLong(2, cart.productId);
            createCartItemStmt.setString(3, cart.storeName);
            createCartItemStmt.setLong(4, cart.quantity);
            createCartItemStmt.executeUpdate();
    
            ResultSet generatedCartItemKeys = createCartItemStmt.getGeneratedKeys();
            long cartItemId;
    
            if (generatedCartItemKeys.next()) {
                cartItemId = generatedCartItemKeys.getLong(1);
            } else {
                throw new SQLException("Creating cart item failed, no generated key obtained.");
            }
    
            connection.close();
    
            // Set the cartId and cartItemId in the Cart object
            cart.cartId = cartId;
            cart.cartItemId = cartItemId;
    
            return cart;
        } catch (SQLException e) {
            throw new RuntimeException("Error in create cart", e);
        }
    }

    @Override
    public List<Cart> findById(Long id) {
        List<Cart> cartItems = new ArrayList<>();
    
        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement cartIdStmt = connection.prepareStatement(
                "SELECT CartID FROM Carts WHERE UserID = ?;"
            );
            cartIdStmt.setLong(1, id);
            ResultSet cartIdResult = cartIdStmt.executeQuery();
    
            if (cartIdResult.next()) {
                long cartId = cartIdResult.getLong("CartID");
    
                PreparedStatement stmt = connection.prepareStatement(
                    "SELECT CI.CartItemID, CI.CartID, CI.ProductID, CI.StoreName, CI.Quantity, C.UserID, C.DateCreated " +
                    "FROM CartItems CI " +
                    "JOIN Carts C ON CI.CartID = C.CartID " +
                    "WHERE CI.CartID = ?;"
                );
                stmt.setLong(1, cartId);
                ResultSet rs = stmt.executeQuery();
    
                while (rs.next()) {
                    Cart cart = new Cart();
                    cart.cartItemId = rs.getLong("CartItemID");
                    cart.cartId = rs.getLong("CartID");
                    cart.productId = rs.getLong("ProductID");
                    cart.storeName = rs.getString("StoreName");
                    cart.quantity = rs.getLong("Quantity");
                    cart.userId = rs.getLong("UserID");
                    cart.dateCreated = rs.getString("DateCreated");
    
                    cartItems.add(cart);
                }
            }
    
            connection.close();
        } catch (SQLException e) {
            throw new RuntimeException("Error in findById", e);
        }
    
        return cartItems;
    }    

    @Override
    public Cart update(Cart cart) {
        try {
            Connection connection = dataSource.getConnection();
    
            // Initialize cartId and cartItemId to default values
            long cartId = -1;
            long cartItemId = -1;
    
            // Check if the user exists
            PreparedStatement checkUserStmt = connection.prepareStatement(
                "SELECT UserID FROM Users WHERE UserID = ?;"
            );
            checkUserStmt.setLong(1, cart.userId);
            ResultSet userResult = checkUserStmt.executeQuery();
    
            if (!userResult.next()) {
                // User does not exist
                connection.close();
                throw new SQLException("User not found");
            }
    
            // Check if a cart already exists for the user
            PreparedStatement checkCartStmt = connection.prepareStatement(
                "SELECT CartID FROM Carts WHERE UserID = ?;"
            );
            checkCartStmt.setLong(1, cart.userId);
            ResultSet cartResult = checkCartStmt.executeQuery();
    
            if (cartResult.next()) {
                // Cart exists, retrieve the CartID
                cartId = cartResult.getLong("CartID");
    
                // Check if the specified cart item exists
                PreparedStatement checkCartItemStmt = connection.prepareStatement(
                    "SELECT CartItemID FROM CartItems WHERE CartID = ? AND ProductID = ? AND StoreName = ?;"
                );
                checkCartItemStmt.setLong(1, cartId);
                checkCartItemStmt.setLong(2, cart.productId);
                checkCartItemStmt.setString(3, cart.storeName);
                ResultSet cartItemResult = checkCartItemStmt.executeQuery();
    
                if (cartItemResult.next()) {
                    // Cart item exists, update its quantity
                    cartItemId = cartItemResult.getLong("CartItemID");
                    PreparedStatement updateCartItemStmt = connection.prepareStatement(
                        "UPDATE CartItems SET Quantity = ? WHERE CartItemID = ?;"
                    );
                    updateCartItemStmt.setLong(1, cart.quantity);
                    updateCartItemStmt.setLong(2, cartItemId);
                    updateCartItemStmt.executeUpdate();
                }
            }
    
            connection.close();
    
            // Set the cartId and cartItemId in the Cart object
            cart.cartId = cartId;
            cart.cartItemId = cartItemId;
    
            return cart;
        } catch (SQLException e) {
            throw new RuntimeException("Error in update cart", e);
        }
    }
    
    @Override
    public void delete(Long userId, Long cartId, Long cartItemId) {
        try {
            Connection connection = dataSource.getConnection();
    
            // Check if the user exists
            PreparedStatement checkUserStmt = connection.prepareStatement(
                "SELECT UserID FROM Users WHERE UserID = ?;"
            );
            checkUserStmt.setLong(1, userId);
            ResultSet userResult = checkUserStmt.executeQuery();
    
            if (!userResult.next()) {
                // User does not exist
                connection.close();
                throw new SQLException("User not found");
            }
    
            // Check if the specified cart exists for the user
            PreparedStatement checkCartStmt = connection.prepareStatement(
                "SELECT CartID FROM Carts WHERE CartID = ? AND UserID = ?;"
            );
            checkCartStmt.setLong(1, cartId);
            checkCartStmt.setLong(2, userId);
            ResultSet cartResult = checkCartStmt.executeQuery();
    
            if (!cartResult.next()) {
                // Cart does not exist for the user
                connection.close();
                throw new SQLException("Cart not found");
            }
    
            // Check if the specified cart item exists in the cart
            PreparedStatement checkCartItemStmt = connection.prepareStatement(
                "SELECT CartItemID FROM CartItems WHERE CartItemID = ? AND CartID = ?;"
            );
            checkCartItemStmt.setLong(1, cartItemId);
            checkCartItemStmt.setLong(2, cartId);
            ResultSet cartItemResult = checkCartItemStmt.executeQuery();
    
            if (!cartItemResult.next()) {
                // Cart item does not exist in the cart
                connection.close();
                throw new SQLException("Cart item not found");
            }
    
            // Delete the specified cart item
            PreparedStatement deleteCartItemStmt = connection.prepareStatement(
                "DELETE FROM CartItems WHERE CartItemID = ?;"
            );
            deleteCartItemStmt.setLong(1, cartItemId);
            deleteCartItemStmt.executeUpdate();
    
            connection.close();
        } catch (SQLException e) {
            throw new RuntimeException("Error in delete cart item", e);
        }
    }    
}
