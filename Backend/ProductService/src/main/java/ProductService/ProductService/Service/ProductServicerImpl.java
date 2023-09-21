package ProductService.ProductService.Service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ProductService.ProductService.Model.DetailedProduct;
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

    @Override
    public Optional<DetailedProduct> findDetailProduct(Long id){
        return null;
    }

}
