package ProductService.ProductService.Repository;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ProductService.ProductService.Model.DetailedProduct;
import ProductService.ProductService.Model.Product;

@SpringBootTest
class TestProductRepository {
    
    @Autowired
    private ProductRepository productRepository;

    @Test
    public void testFindAll(){

        List<Product> products = productRepository.findAll();
        assertEquals(1L, products.get(0).productId());

    }

    @Test
    public void testFindDetailedProductById(){
        Long id = 1L;
        String[] storeNames = {"CityStore North", "SuperMart East", "GreenGrocer West", "SuperMart Central"};
        Double[] prices = {2.78, 3.32, 4.45, 4.78};
        DetailedProduct expectedProduct = new DetailedProduct(id, storeNames, prices);

        Optional<DetailedProduct> dProducts = productRepository.findDetailProductById(id);
        assertTrue(dProducts.isPresent());
        assertEquals(expectedProduct, dProducts.get());
    }

}
