package UserService.UserService.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.boot.test.context.SpringBootTest;

import UserService.UserService.Model.Cart;

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

    @Test
    public void testCreateCart() {

        Cart testCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 1L);
        testCart.cartId = 1L;
        testCart.cartItemId = 1L;
        Cart retCart = userRepo.create(testCart);
        assertEquals(testCart.cartId, retCart.cartId);
        assertEquals(testCart.cartItemId, retCart.cartItemId);
        assertEquals(testCart.userId, retCart.userId);

    }

    @Test
    public void testFindById() {

        Cart testCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 1L);
        testCart.cartId = 1L;
        testCart.cartItemId = 1L;
        Cart testCart2 = new Cart(1L, "20/20/2020", 2L, "CityStore North", 2L);
        testCart2.cartId = 1L;
        testCart2.cartItemId = 2L;
        Cart retCart = userRepo.create(testCart);
        Cart retCart2 = userRepo.create(testCart2);

        Long cartId = 1L;
        List<Cart> cartItems = userRepo.findById(cartId);

        assertEquals(2, cartItems.size());

    }

}
