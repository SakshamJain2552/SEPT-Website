package ProductService.ProductService.Controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import ProductService.ProductService.Model.DetailedProduct;
import ProductService.ProductService.Model.Product;
import ProductService.ProductService.Model.UserReview;
import ProductService.ProductService.Service.ProductServicer;

@RestController
@CrossOrigin
@RequestMapping(value = "/products")
public class ProductController {
    
    private final ProductServicer productServicer;

    @Autowired
    public ProductController(ProductServicer productServicer){
        this.productServicer = productServicer;
    }

    @GetMapping
    public Collection<Product> allProducts() {
        return productServicer.getProducts();
    }

    @GetMapping("/{id}")
    public DetailedProduct getDetailedProductById(@PathVariable Long id) throws Exception {
        String str = Long.toString(id);
        return productServicer.findDetailProduct(id).orElseThrow(
            () -> new Exception(str)
        );
    }

    @PostMapping("/review")
    public ResponseEntity<UserReview> newRating(@RequestBody UserReview userReview) {
        UserReview review = productServicer.setUserReview(userReview);
        return new ResponseEntity<UserReview>(review, HttpStatus.CREATED);
    }

    @GetMapping("/review/{productId}")
    public Double getAvgUserReview(@PathVariable Long productId) {
        return productServicer.getUserReview(productId);
    }

}
