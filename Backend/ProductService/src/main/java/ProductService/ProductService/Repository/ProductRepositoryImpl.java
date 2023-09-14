package ProductService.ProductService.Repository;

import java.util.List;

import javax.sql.DataSource;

import org.springframework.stereotype.Repository;

import ProductService.ProductService.Model.Product;

@Repository
public class ProductRepositoryImpl implements ProductRepository{

    private final DataSource dataSource;

    public ProductRepositoryImpl(DataSource dataSource){
        this.dataSource = dataSource;
    }

    @Override
    public List<Product> findAll() {
        return null;
    }

}
