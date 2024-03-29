package ProductService.ProductService.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.sql.DataSource;

import org.springframework.stereotype.Repository;

import ProductService.ProductService.Model.DetailedProduct;
import ProductService.ProductService.Model.Product;
import ProductService.ProductService.Model.UserReview;

@Repository
public class ProductRepositoryImpl implements ProductRepository{

    private final DataSource dataSource;

    public ProductRepositoryImpl(DataSource dataSource){
        this.dataSource = dataSource;
    }
       

    @Override
    public List<Product> findAll(){
        
        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement stm = connection.prepareStatement(
                "SELECT p.ProductID AS productId, p.ProductName AS productName, s.StoreName AS storeName, p.Category AS category, p.Description AS description, pp.Price AS price, p.Image AS imagePath\r\n" + //
                "FROM Products p\r\n" + //
                "JOIN ProductPrices pp ON p.ProductID = pp.ProductID\r\n" + //
                "JOIN Stores s ON pp.StoreID = s.StoreID\r\n" + //
                "LEFT JOIN (SELECT ProductID, MIN(Price) AS MinPrice FROM ProductPrices GROUP BY ProductID) AS MinPrices ON pp.ProductID = MinPrices.ProductID\r\n" + //
                "WHERE pp.Price = MinPrices.MinPrice\r\n" + //
                "ORDER BY p.ProductID;"
            );
            List<Product> products = new ArrayList<>();
            ResultSet rs = stm.executeQuery();
            while(rs.next()) {

                String imagePath = null;

                imagePath = "../images/" + "product_" + rs.getLong(1) + ".png";

                Product product = new Product(rs.getLong(1), rs.getString(2), rs.getString(3), 
                rs.getString(4), rs.getString(5), rs.getDouble(6), imagePath);
                products.add(product);
            }
            connection.close();
            return products;
        } catch (SQLException e) {
            throw new RuntimeException("Error in findAll()", e);
        }

    }

    @Override
    public Optional<DetailedProduct> findDetailProductById(Long id) {
        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement stm = connection.prepareStatement(
                    "SELECT p.ProductID AS productId, s.StoreName AS storeName, pp.Price AS price " +
                    "FROM Products p " +
                    "JOIN ProductPrices pp ON p.ProductID = pp.ProductID " +
                    "JOIN Stores s ON pp.StoreID = s.StoreID " +
                    "WHERE p.ProductID = ? " + // Specify the product ID you want
                    "ORDER BY pp.Price ASC;"
            );
            stm.setLong(1, id); // Set the product ID parameter
            ResultSet rs = stm.executeQuery();
    
            List<String> storeNames = new ArrayList<>();
            List<Double> prices = new ArrayList<>();
    
            while (rs.next()) {
                storeNames.add(rs.getString("storeName"));
                prices.add(rs.getDouble("price"));
            }
    
            if (storeNames.isEmpty()) {
                // No detailed product information found for the given ID
                return Optional.empty();
            }
    
            DetailedProduct detailedProduct = new DetailedProduct(id, 
                storeNames.toArray(new String[0]), prices.toArray(new Double[0]));
    
            connection.close();
            return Optional.of(detailedProduct);
        } catch (SQLException e) {
            throw new RuntimeException("Error in findDetailProductById()", e);
        }
    }    

    @Override
    public UserReview setReview(UserReview userReview) {
        try {
            Connection connection = dataSource.getConnection();
            // Check if a review already exists for the user and product
            PreparedStatement checkStatement = connection.prepareStatement(
                "SELECT COUNT(*) FROM UserRating WHERE UserID = ? AND ProductID = ?"
            );
            checkStatement.setLong(1, userReview.userId());
            checkStatement.setLong(2, userReview.productId());
            ResultSet resultSet = checkStatement.executeQuery();
            resultSet.next();
            int existingReviewCount = resultSet.getInt(1);
    
            if (existingReviewCount > 0) {
                // Review already exists, update it
                PreparedStatement updateStatement = connection.prepareStatement(
                    "UPDATE UserRating SET StoreName = ?, ReviewInteger = ? WHERE UserID = ? AND ProductID = ?"
                );
                updateStatement.setString(1, userReview.storeName());
                updateStatement.setDouble(2, userReview.rating());
                updateStatement.setLong(3, userReview.userId());
                updateStatement.setLong(4, userReview.productId());
                int affectedRows = updateStatement.executeUpdate();
    
                if (affectedRows > 0) {
                    // The review was successfully updated
                    connection.close();
                    return userReview;
                } else {
                    connection.close();
                    throw new RuntimeException("Failed to update review.");
                }
            } else {
                // Review does not exist, insert a new one
                PreparedStatement insertStatement = connection.prepareStatement(
                    "INSERT INTO UserRating (UserID, ProductID, StoreName, ReviewInteger) VALUES (?, ?, ?, ?)",
                    PreparedStatement.RETURN_GENERATED_KEYS
                );
    
                // Set parameters for the INSERT statement
                insertStatement.setLong(1, userReview.userId());
                insertStatement.setLong(2, userReview.productId());
                insertStatement.setString(3, userReview.storeName());
                insertStatement.setDouble(4, userReview.rating());
    
                // Execute the INSERT statement
                int affectedRows = insertStatement.executeUpdate();
    
                if (affectedRows > 0) {
                    // The review was successfully inserted
                    connection.close();
                    return userReview;
                } else {
                    connection.close();
                    throw new RuntimeException("Failed to insert review.");
                }
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error in setReview()", e);
        }
    }        

    @Override
    public Double getReview(Long productId) {
        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement avgStatement = connection.prepareStatement(
                "SELECT AVG(ReviewInteger) AS avgRating FROM UserRating WHERE ProductID = ?"
            );
    
            // Set the productId parameter
            avgStatement.setLong(1, productId);
    
            ResultSet resultSet = avgStatement.executeQuery();
    
            if (resultSet.next()) {
                // Get the average rating
                double averageRating = resultSet.getDouble("avgRating");
                connection.close();
                return averageRating;
            } else {
                // No reviews found for the given product ID
                connection.close();
                return null;
            }
        } catch (SQLException e) {
            throw new RuntimeException("Error in getReview()", e);
        }
    }    

}
