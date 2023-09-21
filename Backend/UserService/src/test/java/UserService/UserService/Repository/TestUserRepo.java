package UserService.UserService.Repository;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

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
    public void testUsernameUniqueVerified() {
        boolean usernameUnique = userRepo.usernameUniqueVerified("unittestuser", "password123", "unittestuser@email.com");
        assertTrue(usernameUnique);
    }
}
