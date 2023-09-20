package UserService.UserService.Service;

import org.springframework.boot.test.context.SpringBootTest;

import org.mockito.Mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;

import UserService.UserService.Repository.UserRepo;

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
    public void testUsernameUnique() {
        when(userRepo.usernameUniqueVerified("test123", "password123")).thenReturn(true);
        boolean successfulLogin = userService.usernameUnique("test123", "password123");
        assertTrue(successfulLogin);
    }
}
