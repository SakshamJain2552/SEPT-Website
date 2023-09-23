package UserService.UserService.Model;
import com.fasterxml.jackson.annotation.JsonProperty;

public class Cart{

    @JsonProperty("userId")
    public Long userId;

    @JsonProperty("dateCreated")
    public String dateCreated;

    @JsonProperty("productId")
    public Long productId;

    @JsonProperty("storeName")
    public String storeName;

    @JsonProperty("quantity")
    public Long quantity;

    @JsonProperty("cartId")
    public Long cartId;

    @JsonProperty("cartItemId")
    public Long cartItemId;

    public Cart() {}

    public Cart(Long userId, String dateCreated, 
    Long productId, String storeName, Long quantity){
        this.userId = userId;
        this.dateCreated = dateCreated;
        this.productId = productId;
        this.storeName = storeName;
        this.quantity = quantity;
    }

}
