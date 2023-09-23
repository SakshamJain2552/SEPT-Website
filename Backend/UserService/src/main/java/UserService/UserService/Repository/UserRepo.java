package UserService.UserService.Repository;

import java.util.List;
import java.util.Map;

import UserService.UserService.Model.Cart;

public interface UserRepo {
    public boolean userFound(String username, String password);
    public boolean usernameUniqueVerified(String username, String password, String email);
    public Map<String, String> getUserDetails(String username);

    // Cart - Create
    public Cart create(Cart cart);

    // Cart - Read
    public List<Cart> findById(Long id);

}
