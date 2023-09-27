package ProductService.ProductService.Service;

import java.util.Collection;
import java.util.Optional;

import ProductService.ProductService.Model.DetailedProduct;
import ProductService.ProductService.Model.Product;

public interface ProductServicer {
    
    public Collection<Product> getProducts();

    public Optional<DetailedProduct> findDetailProduct(Long id);

}
