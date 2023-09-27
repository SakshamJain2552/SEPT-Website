package ProductService.ProductService.Repository;

import java.util.List;
import ProductService.ProductService.Model.Product;

public interface ProductRepository {

    // CRUD - Read:
    public List<Product> findAll();

}
