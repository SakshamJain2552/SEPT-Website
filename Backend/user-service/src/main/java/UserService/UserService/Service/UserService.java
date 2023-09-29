package UserService.UserService.Service;

import java.util.Collection;
import java.util.Map;

import UserService.UserService.Model.User;
import UserService.UserService.Model.Cart;

public interface UserService {
    // User - Read (Login)
    public boolean userVerified(String username, String password);

    // User - Create (Sign-up)
    public boolean createUser(User user);
  
    // User - Read
    public Map<String, String> findUser(String username);

    // Cart - Create
    public Cart createCart(Cart cart);

    // Cart - Read
    public Collection<Cart> getCartItems(Long id);

    // Cart - Update
    public Cart updateCart(Cart cart);

    // Cart - Delete
    public void deleteCart(Long userId, Long cartId, Long cartItemId);

}
