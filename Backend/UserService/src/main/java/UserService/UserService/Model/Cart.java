package UserService.UserService.Model;

public class Cart{

    public Long userId;
    public String dateCreated;
    public Long productId;
    public String storeName;
    public Long quantity;
    public Long cartId;
    public Long cartItemId;

    public Cart(Long userId, String dateCreated, 
    Long productId, String storeName, Long quantity){
        this.userId = userId;
        this.dateCreated = dateCreated;
        this.productId = productId;
        this.storeName = storeName;
        this.quantity = quantity;
    }

}
