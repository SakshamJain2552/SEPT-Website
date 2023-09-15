package ProductService.ProductService.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.stereotype.Repository;

import ProductService.ProductService.Model.Product;

@Repository
public class ProductRepositoryImpl implements ProductRepository{

    private final DataSource dataSource;

    public ProductRepositoryImpl(DataSource dataSource){
        this.dataSource = dataSource;
    }

    @Override
    public List<Product> findAll() {
        
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
                Product product = new Product(rs.getLong(1), rs.getString(2), rs.getString(3), 
                rs.getString(4), rs.getString(5), rs.getDouble(6), rs.getBlob(7));
                products.add(product);
            }
            connection.close();
            return products;
        } catch (SQLException e) {
            throw new RuntimeException("Error in findAll()", e);
        }

    }

}
