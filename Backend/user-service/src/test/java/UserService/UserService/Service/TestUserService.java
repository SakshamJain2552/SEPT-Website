package UserService.UserService.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.boot.test.context.SpringBootTest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.mockito.Mock;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import UserService.UserService.Model.Cart;
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
        assertEquals(userRepo.userFound("alice123", "password123"), successfulLogin);
    }

    @Test
    public void testCreateUser() {
        // New user object to be tested
        User user = new User(0, "test", "user", "unittestuser", "password123", "unittestuser@gmail.com", true, "", 0, "", 0);

        when(userRepo.addUser(user)).thenReturn(true);
        boolean successfulLogin = userService.createUser(user);
        assertEquals(userRepo.addUser(user), successfulLogin);
    }

    @Test
    public void testFindUser() {
        Map<String, String> testDetails = new HashMap<>();
        testDetails.put("UserID", "1");
        testDetails.put("FirstName", "alice");
        testDetails.put("LastName", "123");
        testDetails.put("Username", "alice123");
        testDetails.put("Password", "password123");
        testDetails.put ("Email", "alice@email.com");
        testDetails.put("Notifications", "true");
        testDetails.put("CardName", "");
        testDetails.put("CardNumber", "0");
        testDetails.put("CardExpiration", "");
        testDetails.put("CardCVV", "0");
        when(userRepo.getUserDetails("alice123")).thenReturn(testDetails);
       
        Map<String, String> userDetails = userService.findUser("alice123");
        assertEquals(testDetails.get("UserID"), userDetails.get("UserID"));
        assertEquals(testDetails.get("FirstName"), userDetails.get("FirstName"));
        assertEquals(testDetails.get("LastName"), userDetails.get("LastName"));
        assertEquals(testDetails.get("Username"), userDetails.get("Username"));
        assertEquals(testDetails.get("Password"), userDetails.get("Password"));
        assertEquals(testDetails.get("Email"), userDetails.get("Email"));
        assertEquals(testDetails.get("Notifications"), userDetails.get("Notifications"));
        assertEquals(testDetails.get("CardName"), userDetails.get("CardName"));
        assertEquals(testDetails.get("CardNumber"), userDetails.get("CardNumber"));
        assertEquals(testDetails.get("CardExpiration"), userDetails.get("CardExpiration"));
        assertEquals(testDetails.get("CardCVV"), userDetails.get("CardCVV"));
    }

    @Test
    public void testUpdateUserNotifications() {
        when(userRepo.updateUserNotificationPreference(true, "alice123")).thenReturn(true);
        boolean successfulUpdate = userService.updateUserNotifications(true, "alice123");
        assertEquals(userRepo.updateUserNotificationPreference(true, "alice123"), successfulUpdate);
    }

    @Test
    public void testCartCreation() {
        Cart testCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 1L);
        testCart.cartId = 1L;
        testCart.cartItemId = 1L;

        when(userRepo.create(any(Cart.class))).thenReturn(testCart);

        Cart createdCart = userService.createCart(testCart);

        assertNotNull(createdCart);
        assertEquals(1L, createdCart.cartId);
        assertEquals(1L, createdCart.cartItemId);

    }

    @Test
    public void testGetCartItems() {

        Long cartId = 1L;

        List<Cart> mockCarts = new ArrayList<>();
        Cart testCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 1L);
        testCart.cartId = 1L;
        testCart.cartItemId = 1L;
        Cart testCart2 = new Cart(1L, "20/20/2020", 2L, "CityStore North", 2L);
        testCart2.cartId = 1L;
        testCart2.cartItemId = 2L;
        mockCarts.add(testCart);
        mockCarts.add(testCart2);
        when(userRepo.findById(cartId)).thenReturn(mockCarts);

        Collection<Cart> cartItems = userService.getCartItems(cartId);

        assertEquals(mockCarts.size(), cartItems.size());

    }

    @Test
    public void testUpdateCart() {

        Cart testCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 2L);
        testCart.cartId = 1L;
        testCart.cartItemId = 1L;

        when(userRepo.update(any(Cart.class))).thenReturn(testCart);

        Cart updatedCart = userService.updateCart(testCart);

        assertNotNull(updatedCart);
        assertEquals(testCart.cartId, updatedCart.cartId);
        assertEquals(testCart.cartItemId, updatedCart.cartItemId);
        assertEquals(testCart.quantity, updatedCart.quantity);

    }
}
