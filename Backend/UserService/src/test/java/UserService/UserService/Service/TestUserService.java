package UserService.UserService.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.boot.test.context.SpringBootTest;
import org.mockito.Mock;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import UserService.UserService.Model.Cart;
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
        when(userRepo.usernameUniqueVerified("unittestuser", "password123", "unittestuser@email.com")).thenReturn(true);
        boolean successfulLogin = userService.usernameUnique("unittestuser", "password123", "unittestuser@email.com");
        assertTrue(successfulLogin);
    }

    @Test
    public void testFindUser() {
        Map<String, String> testDetails = new HashMap<>();
        testDetails.put("UserID", "1");
        testDetails.put("Username", "alice123");
        testDetails.put("Password", "password123");
        testDetails.put ("Email", "alice@email.com");
        when(userRepo.getUserDetails("alice123")).thenReturn(testDetails);
       
        Map<String, String> userDetails = userService.findUser("alice123");
        assertEquals(testDetails.get("UserID"), userDetails.get("UserID"));
        assertEquals(testDetails.get("Username"), userDetails.get("Username"));
        assertEquals(testDetails.get("Password"), userDetails.get("Password"));
        assertEquals(testDetails.get("Email"), userDetails.get("Email"));
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

        when(userRepo.create(any(Cart.class))).thenReturn(testCart);

        Cart updatedCart = userService.updateCart(testCart);

        assertNotNull(updatedCart);
        assertEquals(testCart.cartId, updatedCart.cartId);
        assertEquals(testCart.cartItemId, updatedCart.cartItemId);
        assertEquals(testCart.quantity, updatedCart.quantity);

    }

}
