package UserService.UserService.Repository;

import UserService.UserService.Model.User;

public interface UserRepo {
    // Read
    public boolean userFound(String username, String password);

    // Create
    public boolean addUser(User user);
}
