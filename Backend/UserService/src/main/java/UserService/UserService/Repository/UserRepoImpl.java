package UserService.UserService.Repository;

import java.util.Map;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.stereotype.Repository;

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
    public boolean usernameUniqueVerified(String username, String password, String email) {
        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement stm = connection.prepareStatement(
                "SELECT UserID, Username, Password, Email\r\n" + //
                "FROM Users;"
            );

            ResultSet rs = stm.executeQuery();

            System.out.println("Given username and email: " + username + " - " + email);
            int userID = 0;
            while(rs.next()) {
                userID = rs.getInt(1);
                if (rs.getString(2).equals(username) && rs.getString(4).equals(email)) {
                    System.out.println("Username or Email is already in the database.");
                    connection.close();
                    return false;
                }
            }
            
            // Username and Email is unique, so insert new user into database
            userID += 1;
            stm = connection.prepareStatement(
                "INSERT INTO Users\r\n" + //
                "VALUES (" + userID + ",'"  + username + "','" + password + "','" + email + "');"
            );
            stm.execute();

            System.out.println("New user inserted into database:");
            System.out.println("UserID: " + userID);
            System.out.println("Username: " + username);
            System.out.println("Password: " + password);
            System.out.println("Email: " + email);

            connection.close();
            return true;
            
        } catch (SQLException e) {
            throw new RuntimeException("Error in usernameUniqueVerified()", e);
        }
    }

    @Override
    public Map<String, String> getUserDetails(String username) {

        Map<String,String> userDetails = new HashMap<>();

        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement stm = connection.prepareStatement(
                "SELECT UserID, Username, Password, Email\r\n" + //
                "FROM Users;"
            );

            ResultSet rs = stm.executeQuery();

            System.out.println("Given username: " + username);
            while(rs.next()) {
                if (rs.getString(2).equals(username)) {
                    System.out.println("User found: " + rs.getString(2));
                    
                    userDetails.put("UserID", Integer.toString(rs.getInt(1)));
                    userDetails.put("Username", rs.getString(2));
                    userDetails.put("Password", rs.getString(3));
                    userDetails.put("Email", rs.getString(4));
                
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

}
