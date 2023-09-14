package ProductService.ProductService.Model;

public record Product(Long productId, String productName, 
String storeName, String category, String description, 
Double price, String imagePath){

}
