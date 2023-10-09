package UserService.UserService.Repository;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.flywaydb.core.Flyway;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import UserService.UserService.Model.User;
import UserService.UserService.Model.Cart;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class TestUserRepo {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private Flyway databaseMigrator;

   
    @BeforeEach
    public void initialize() {
        databaseMigrator.migrate();
    }

    @AfterEach
    public void cleanup() {
        databaseMigrator.clean();
    }

    @Test
    public void testUserFound() {
        boolean userFound = userRepo.userFound("alice123", "password123");
        assertTrue(userFound);
    }

    @Test
    public void testAddUser() {
        // New user object to be tested
        User user = new User(0, "test", "user", "unittestuser", "password123", "unittestuser@gmail.com", "1 Test Street, Victoria", true, "", Long.valueOf(0), "", 0);
        boolean usernameUnique = userRepo.addUser(user);
        assertTrue(usernameUnique);
    }

    @Test
    public void testGetUserDetails() {
        Map<String, String> testDetails = new HashMap<>();
        testDetails.put("UserID", "1");
        testDetails.put("FirstName", "alice");
        testDetails.put("LastName", "123");
        testDetails.put("Username", "alice123");
        testDetails.put("Password", "password123");
        testDetails.put ("Email", "alice@email.com");
        testDetails.put("Address", "1 Alice Street, Victoria");
        testDetails.put("Notifications", "false");
        testDetails.put("CardName", "");
        testDetails.put("CardNumber", "0");
        testDetails.put("CardExpiration", "");
        testDetails.put("CardCVV", "0");

        Map<String, String> userDetails = userRepo.getUserDetails("alice123");
        assertEquals(testDetails.get("UserID"), userDetails.get("UserID"));
        assertEquals(testDetails.get("FirstName"), userDetails.get("FirstName"));
        assertEquals(testDetails.get("LastName"), userDetails.get("LastName"));
        assertEquals(testDetails.get("Username"), userDetails.get("Username"));
        assertEquals(testDetails.get("Password"), userDetails.get("Password"));
        assertEquals(testDetails.get("Email"), userDetails.get("Email"));
        assertEquals(testDetails.get("Address"), userDetails.get("Address"));
        assertEquals(testDetails.get("Notifications"), userDetails.get("Notifications"));
        assertEquals(testDetails.get("CardName"), userDetails.get("CardName"));
        assertEquals(testDetails.get("CardNumber"), userDetails.get("CardNumber"));
        assertEquals(testDetails.get("CardExpiration"), userDetails.get("CardExpiration"));
        assertEquals(testDetails.get("CardCVV"), userDetails.get("CardCVV"));
    }

    @Test
    public void testUpdateUserNotificationPreference() {
        boolean updateSuccessful = userRepo.updateUserNotificationPreference(true, "alice123");
        assertTrue(updateSuccessful);
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

    @Test
    public void testUpdate() {

        Cart testCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 1L);
        testCart.cartId = 1L;
        testCart.cartItemId = 1L;
        Cart retCart = userRepo.create(testCart);

        Cart updateCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 2L);

        Cart updateRetCart = userRepo.update(updateCart);

        assertEquals(updateCart.cartId, updateRetCart.cartId);
        assertEquals(updateCart.cartItemId, updateRetCart.cartItemId);
        assertEquals(updateCart.quantity, updateRetCart.quantity);

    }
}
