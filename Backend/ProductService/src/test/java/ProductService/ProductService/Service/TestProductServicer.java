package ProductService.ProductService.Service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import ProductService.ProductService.Model.DetailedProduct;
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

    @Test
    public void testFindDetailProduct() {

        Long id = 1L;
        String[] storeNames = {"test1", "test2", "test3", "test4"};
        Double[] prices = {1.00, 2.00, 3.00, 4.00};
        DetailedProduct mockProduct = new DetailedProduct(id, storeNames, prices);
        when(productRepository.findDetailProductById(id)).thenReturn(Optional.of(mockProduct));

        Optional<DetailedProduct> foundProduct = productServicer.findDetailProduct(id);

        assertTrue(foundProduct.isPresent());
        assertEquals(mockProduct, foundProduct.get());

    }

}
