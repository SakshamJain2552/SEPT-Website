package ProductService.ProductService.Service;

import java.util.Collection;
import java.util.Optional;

import ProductService.ProductService.Model.DetailedProduct;
import ProductService.ProductService.Model.Product;
import ProductService.ProductService.Model.UserReview;

public interface ProductServicer {
    
    public Collection<Product> getProducts();

    public Optional<DetailedProduct> findDetailProduct(Long id);

    public UserReview setUserReview(UserReview userReview);

    public Double getUserReview(Long productId);

}
