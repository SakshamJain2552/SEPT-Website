package ProductService.ProductService.Controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ProductService.ProductService.Model.Product;
import ProductService.ProductService.Service.ProductServicer;

@RestController
@RequestMapping(value = "/products")
public class ProductController {
    
    private final ProductServicer productServicer;

    @Autowired
    public ProductController(ProductServicer productServicer){
        this.productServicer = productServicer;
    }

    @GetMapping
    public Collection<Product> allProducts() {
        return null;
    }

}
