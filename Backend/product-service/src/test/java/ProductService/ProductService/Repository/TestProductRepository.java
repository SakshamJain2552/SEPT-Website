package ProductService.ProductService.Repository;

import static org.junit.Assert.assertTrue;
import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ProductService.ProductService.Model.DetailedProduct;
import ProductService.ProductService.Model.Product;
import ProductService.ProductService.Model.UserReview;

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
        // Mock the data and repository
        Long id = 1L;
        String[] expectedStoreNames = {"CityStore North", "SuperMart East", "GreenGrocer West", "SuperMart Central"};
        Double[] expectedPrices = {2.78, 3.32, 4.45, 4.78};
        DetailedProduct expectedProduct = new DetailedProduct(id, expectedStoreNames, expectedPrices);

        // Call the repository method to get the actual result
        Optional<DetailedProduct> actualProductOptional = productRepository.findDetailProductById(id);

        // Check if the result is present
        assertTrue(actualProductOptional.isPresent());

        // Get the actual product from the Optional
        DetailedProduct actualProduct = actualProductOptional.get();

        // Compare the productId
        assertEquals(expectedProduct.productId(), actualProduct.productId());

        // Compare storeNames array
        assertArrayEquals(expectedProduct.storeNames(), actualProduct.storeNames());

        // Compare prices array
        assertArrayEquals(expectedProduct.prices(), actualProduct.prices());
    }

    // Rating for this product by same user should be 5.0, after running this test it should be 3.0.
    @Test
    public void testSetReview(){
        UserReview expReview = new UserReview(1L, 1L, "Supermarket Central", 3.0);

        UserReview actReview = productRepository.setReview(expReview);

        assertEquals(expReview.userId(), actReview.userId());
        assertEquals(expReview.productId(), actReview.productId());
        assertEquals(expReview.rating(), actReview.rating());

    }

    // Rating was avg 3.667 before testSetReview, should be 3.0 now.
    @Test
    public void testGetReview(){
        Long productId = 1L;

        Double actAvgRating = productRepository.getReview(productId);

        assertEquals(actAvgRating, 3.0);
    }

}
