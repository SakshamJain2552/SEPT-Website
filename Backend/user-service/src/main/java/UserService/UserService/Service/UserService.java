package UserService.UserService.Service;

import UserService.UserService.Model.User;

public interface UserService {
    // Read
    public boolean userVerified(String username, String password);

    // Create
    public boolean createUser(User user);
}
