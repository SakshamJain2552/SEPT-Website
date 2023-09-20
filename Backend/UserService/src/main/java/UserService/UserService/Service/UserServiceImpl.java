package UserService.UserService.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public boolean usernameUnique(String username, String password){
        return repository.userFound(username, password);
    }
}
