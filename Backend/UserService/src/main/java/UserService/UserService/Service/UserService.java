package UserService.UserService.Service;

import java.util.Collection;
import java.util.Map;

import UserService.UserService.Model.Cart;

public interface UserService {
    public boolean userVerified(String username, String password);
    public boolean usernameUnique(String username, String password, String email);
    public Map<String, String> findUser(String username);

    // Cart - Create
    public Cart createCart(Cart cart);

    // Cart - Read
    public Collection<Cart> getCartItems(Long id);

    // Cart - Update
    public Cart updateCart(Cart cart);

}
