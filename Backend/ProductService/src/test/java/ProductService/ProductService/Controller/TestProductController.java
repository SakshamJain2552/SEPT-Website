package ProductService.ProductService.Controller;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import ProductService.ProductService.Model.Product;
import ProductService.ProductService.Service.ProductServicer;

@SpringBootTest
class TestProductController {
    
    @Mock
    private ProductServicer productServicer;

    private ProductController productController;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        productController = new ProductController(productServicer);
    }

    @Test
    public void testGetAllProducts() {

        List<Product> mockProducts = new ArrayList<>();
        mockProducts.add(new Product(1L, "test1", "test1", 
        "test1", "test1", 1.00, null));
        mockProducts.add(new Product(2L, "test2", "test2", 
        "test2", "test2", 2.00, null));
        when(productServicer.getProducts()).thenReturn(mockProducts);

        Collection<Product> products = productController.allProducts();

        verify(productServicer, times(1)).getProducts();
        assertEquals(mockProducts.size(), products.size());

    }

}
