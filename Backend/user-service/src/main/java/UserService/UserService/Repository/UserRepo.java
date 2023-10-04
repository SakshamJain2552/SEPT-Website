package UserService.UserService.Repository;

import java.util.List;
import java.util.Map;

import UserService.UserService.Model.User;
import UserService.UserService.Model.Cart;

public interface UserRepo {
    // User - Read (Login)
    public boolean userFound(String username, String password);

    // User - Create (Sign-up)
    public boolean addUser(User user);
    
    // User - Read
    public Map<String, String> getUserDetails(String username);

    // User - Update
    public boolean updateUserNotificationPreference(boolean userPreference, String username);

    // Cart - Create
    public Cart create(Cart cart);

    // Cart - Read
    public List<Cart> findById(Long id);

    // Cart - Update
    public Cart update(Cart cart);

    // Cart - Delete
    public void delete(Long userId, Long cartId, Long cartItemId);

}
