package ProductService.ProductService.Repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ProductService.ProductService.Model.Product;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class TestProductRepository {
    
    @Autowired
    private ProductRepository productRepository;

    @Test
    public void testFindAll(){

        List<Product> products = productRepository.findAll();
        assertEquals(1L, products.get(0).productId());
        assertEquals(2L, products.get(1).productId());
        assertEquals(3L, products.get(2).productId());

    }

}
