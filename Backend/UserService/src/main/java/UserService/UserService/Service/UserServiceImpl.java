package UserService.UserService.Service;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import UserService.UserService.Model.Cart;
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
    public boolean usernameUnique(String username, String password, String email){
        return repository.usernameUniqueVerified(username, password, email);
    }

    @Override
    public Map<String,String> findUser(String username){
        return repository.getUserDetails(username);
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

}
