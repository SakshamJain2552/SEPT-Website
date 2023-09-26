package UserService.UserService.Controller;

import java.util.Map;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import UserService.UserService.Model.Cart;
import UserService.UserService.Service.UserService;

@SpringBootTest
public class TestUserController {

    private MockMvc mockMvc;

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

    @Test
    public void testUserDetails() {
        Map<String, String> testDetails = new HashMap<>();
        testDetails.put("UserID", "1");
        testDetails.put("Username", "alice123");
        testDetails.put("Password", "password123");
        testDetails.put ("Email", "alice@email.com");
        when(userService.findUser("alice123")).thenReturn(testDetails);
       
        Map<String, String> userDetails = userController.userDetails("alice123");
        assertEquals(testDetails.get("UserID"), userDetails.get("UserID"));
        assertEquals(testDetails.get("Username"), userDetails.get("Username"));
        assertEquals(testDetails.get("Password"), userDetails.get("Password"));
        assertEquals(testDetails.get("Email"), userDetails.get("Email"));
    }

    @Test
    public void testControllerCreateCart() throws Exception {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(new UserController(userService)).build();

        Cart newCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 1L);

        when(userService.createCart(any(Cart.class))).thenReturn(newCart);

        mockMvc.perform(MockMvcRequestBuilders.post("/user/cart")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"userId\": 1, \"dateCreated\": \"10/10/2010\", \"productId\": 1, \"storeName\": \"CityStore North\", \"quantity\": 1}")
        )
        .andExpect(MockMvcResultMatchers.status().isCreated())
        .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.jsonPath("$.userId").value(1))
        .andExpect(MockMvcResultMatchers.jsonPath("$.dateCreated").value("10/10/2010"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.productId").value(1))
        .andExpect(MockMvcResultMatchers.jsonPath("$.storeName").value("CityStore North"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.quantity").value(1));

    }

    @Test
    public void testAllCartItems() {

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
        when(userService.getCartItems(cartId)).thenReturn(mockCarts);

        Collection<Cart> cartItems = userController.allCartItems(cartId);

        assertEquals(mockCarts.size(), cartItems.size());

    }

    @Test
    public void testUpdateCartItems() throws Exception {

        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(new UserController(userService)).build();

        Cart newCart = new Cart(1L, "10/10/2010", 1L, "CityStore North", 2L);

        when(userService.createCart(any(Cart.class))).thenReturn(newCart);

        mockMvc.perform(MockMvcRequestBuilders.put("/user/cart")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"userId\": 1, \"dateCreated\": \"10/10/2010\", \"productId\": 1, \"storeName\": \"CityStore North\", \"quantity\": 2}")
        )
        .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.jsonPath("$.userId").value(1))
        .andExpect(MockMvcResultMatchers.jsonPath("$.dateCreated").value("10/10/2010"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.productId").value(1))
        .andExpect(MockMvcResultMatchers.jsonPath("$.storeName").value("CityStore North"))
        .andExpect(MockMvcResultMatchers.jsonPath("$.quantity").value(2));

    }

}