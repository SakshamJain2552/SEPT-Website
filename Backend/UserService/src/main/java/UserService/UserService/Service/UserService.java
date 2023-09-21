package UserService.UserService.Service;

public interface UserService {
    public boolean userVerified(String username, String password);
    public boolean usernameUnique(String username, String password, String email);
}
