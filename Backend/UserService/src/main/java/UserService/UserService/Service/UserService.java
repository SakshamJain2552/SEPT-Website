package UserService.UserService.Service;

import java.util.Map;

public interface UserService {
    public boolean userVerified(String username, String password);
    public boolean usernameUnique(String username, String password, String email);
    public Map<String, String> findUser(String username);
}
