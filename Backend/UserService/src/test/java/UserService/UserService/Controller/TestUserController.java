package UserService.UserService.Controller;

import org.springframework.boot.test.context.SpringBootTest;

import org.mockito.Mock;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
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
        boolean successfulLogin = userController.userLogin("alice123", "password123");
        assertTrue(successfulLogin);
    }
}
