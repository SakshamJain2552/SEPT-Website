package ProductService.ProductService.Repository;

import java.util.List;
import java.util.Optional;

import ProductService.ProductService.Model.DetailedProduct;
import ProductService.ProductService.Model.Product;

public interface ProductRepository {

    // CRUD - Read:
    public List<Product> findAll();

    // Gives detailed product information with given product id
    public Optional<DetailedProduct> findDetailProductById(Long id);

}
