package ProductService.ProductService.Model;

import java.sql.Blob;

public record Product(Long productId, String productName, 
String storeName, String category, String description, 
Double price, Blob imagePath){

}
