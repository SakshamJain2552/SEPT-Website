package ProductService.ProductService.Repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ProductService.ProductService.Model.Product;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TestProductRepository {
    
    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @BeforeEach
    public void setUp() {
        jdbcTemplate.execute("INSERT INTO Products (ProductName, Category, Description) VALUES\r\n" + //
                "('Milk', 'Dairy', 'Fresh whole milk. 1L.'),\r\n" + //
                "('Bread', 'Bakery', 'Whole grain bread. 500g.'),\r\n" + //
                "('Apple', 'Fruits', 'Crisp and sweet. Per Kg.'),\r\n" + //
                "('Chicken', 'Meat', 'Fresh chicken breast. 500g.');");
    }

    @Test
    public void testFindAll(){
        
        List<Product> products = productRepository.findAll();
        assertEquals(4, products.size());

    }

}
