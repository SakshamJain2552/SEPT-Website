package UserService.UserService.Repository;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import UserService.UserService.Model.User;

@SpringBootTest
public class TestUserRepo {
    @Autowired
    private UserRepo userRepo;

    @Test
    public void testUserFound() {
        boolean userFound = userRepo.userFound("alice123", "password123");
        assertTrue(userFound);
    }

    @Test
    public void testAddUser() {
        // New user object to be tested
        User user = new User(0, "test", "user", "unittestuser", "password123", "unittestuser@gmail.com", true, "", 0, "", 0);
        boolean usernameUnique = userRepo.addUser(user);
        assertTrue(usernameUnique);
    }
}
