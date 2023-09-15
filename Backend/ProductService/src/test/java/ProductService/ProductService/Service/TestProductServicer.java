package ProductService.ProductService.Service;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ProductService.ProductService.Model.Product;
import ProductService.ProductService.Repository.ProductRepository;

@SpringBootTest
class TestProductServicer {
    
    @Mock
    private ProductRepository productRepository;
    
    @Autowired
    private ProductServicerImpl productServicer;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        productServicer = new ProductServicerImpl(productRepository);
    }

    @Test
    public void testGetProducts() {

        List<Product> mockProducts = new ArrayList<>();
        mockProducts.add(new Product(1L, "test1", "test1", 
        "test1", "test1", 1.00, null));
        mockProducts.add(new Product(2L, "test2", "test2", 
        "test2", "test2", 2.00, null));
        when(productRepository.findAll()).thenReturn(mockProducts);

        Collection<Product> products = productServicer.getProducts();

        assertEquals(mockProducts.size(), products.size());

    }

}
