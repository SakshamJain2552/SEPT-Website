package UserService.UserService.Controller;

import java.util.Map;
import java.util.HashMap;

import org.springframework.boot.test.context.SpringBootTest;

import org.mockito.Mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import UserService.UserService.Service.UserService;

@SpringBootTest
public class TestUserController {

    @Mock
    private UserService userService;
    private UserController userController;

    @BeforeEach
    public void setUp() {
        userController = new UserController(userService);
    }

    @Test
    public void testUserLogin() {
        when(userService.userVerified("alice123", "password123")).thenReturn(true);
        Map<String, String> body = new HashMap<>();
        body.put("username", "alice123");
        body.put("password", "password123");
        boolean successfulLogin = userController.userLogin(body);
        assertTrue(successfulLogin);
    }

    @Test
    public void testUserSignupSuccesful() {
        when(userService.usernameUnique("unittestuser", "password123", "unittestuser@email.com")).thenReturn(true);
        Map<String, String> body = new HashMap<>();
        body.put("username", "unittestuser");
        body.put("password", "password123");
        body.put ("email", "unittestuser@email.com");
        boolean successfulSignup = userController.userSignup(body);
        assertTrue(successfulSignup);
    }

}
