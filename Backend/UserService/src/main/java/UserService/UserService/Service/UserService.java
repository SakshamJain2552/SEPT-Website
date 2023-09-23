package UserService.UserService.Service;

import java.util.Map;

import UserService.UserService.Model.Cart;

public interface UserService {
    public boolean userVerified(String username, String password);
    public boolean usernameUnique(String username, String password, String email);
    public Map<String, String> findUser(String username);

    // Cart
    public Cart createCart(Cart cart);

}
