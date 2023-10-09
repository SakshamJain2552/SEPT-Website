package UserService.UserService.Service;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import UserService.UserService.Model.Cart;
import UserService.UserService.Model.User;
import UserService.UserService.Repository.UserRepo;

@Service
public class UserServiceImpl implements UserService{
    private final UserRepo repository;

    @Autowired
    public UserServiceImpl(UserRepo repository){
        this.repository = repository;
    }

    @Override
    public boolean userVerified(String username, String password){
        return repository.userFound(username, password);
    }

    @Override
    public boolean createUser(User user){
        return repository.addUser(user);
    }

    @Override
    public Map<String,String> findUser(String username){
        return repository.getUserDetails(username);
    }

    public boolean updateUserNotifications(boolean userPreference, String username) {
        return repository.updateUserNotificationPreference(userPreference, username);
    }

    @Override
    public Cart createCart(Cart cart) {
        return repository.create(cart);
    }

    @Override
    public Collection<Cart> getCartItems(Long id) {
        return repository.findById(id);
    }

    @Override
    public Cart updateCart(Cart cart) {
        return repository.update(cart);
    }

    @Override
    public void deleteCart(Long userId, Long cartId, Long cartItemId){
        repository.delete(userId, cartId, cartItemId);
    }
}
