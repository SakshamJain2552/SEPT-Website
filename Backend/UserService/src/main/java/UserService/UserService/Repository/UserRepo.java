package UserService.UserService.Repository;

public interface UserRepo {
    public boolean userFound(String username, String password);
    public boolean usernameUniqueVerified(String username, String password, String email);
}
