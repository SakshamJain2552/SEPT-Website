package UserService.UserService.Repository;

import java.util.HashMap;
import java.util.Map;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
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

    @Test
    public void testGetUserDetails() {
        Map<String, String> testDetails = new HashMap<>();
        testDetails.put("UserID", "1");
        testDetails.put("Username", "alice123");
        testDetails.put("Password", "password123");
        testDetails.put ("Email", "alice@email.com");

        Map<String, String> userDetails = userRepo.getUserDetails("alice123");
        assertEquals(testDetails.get("UserID"), userDetails.get("UserID"));
        assertEquals(testDetails.get("Username"), userDetails.get("Username"));
        assertEquals(testDetails.get("Password"), userDetails.get("Password"));
        assertEquals(testDetails.get("Email"), userDetails.get("Email"));
    }


}
