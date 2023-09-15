package ProductService.ProductService.Service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ProductService.ProductService.Model.Product;
import ProductService.ProductService.Repository.ProductRepository;

@Service
public class ProductServicerImpl implements ProductServicer{
    
    private final ProductRepository repository;

    @Autowired
    public ProductServicerImpl(ProductRepository repository){
        this.repository = repository;
    }

    @Override
    public Collection<Product> getProducts(){
        return repository.findAll();
    }

}
