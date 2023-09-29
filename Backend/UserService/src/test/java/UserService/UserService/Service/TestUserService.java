package UserService.UserService.Service;

import org.springframework.boot.test.context.SpringBootTest;

import org.mockito.Mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import UserService.UserService.Repository.UserRepo;
import UserService.UserService.Model.User;

@SpringBootTest
public class TestUserService {

    @Mock
    private UserRepo userRepo;
    private UserServiceImpl userService;

    @BeforeEach
    public void setUp() {
        
        userService = new UserServiceImpl(userRepo);
    }

    @Test
    public void testUserVerified() {
        when(userRepo.userFound("alice123", "password123")).thenReturn(true);
        boolean successfulLogin = userService.userVerified("alice123", "password123");
        assertTrue(successfulLogin);
    }

    @Test
    public void testCreateUser() {
        // New user object to be tested
        User user = new User(0, "test", "user", "unittestuser", "password123", "unittestuser@gmail.com", true, "", 0, "", 0);
        
        when(userRepo.addUser(user)).thenReturn(true);
        boolean successfulLogin = userService.createUser(user);
        assertTrue(successfulLogin);
    }
}
