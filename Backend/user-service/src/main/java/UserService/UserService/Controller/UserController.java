package UserService.UserService.Controller;

import java.util.Collection;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import UserService.UserService.Model.Cart;
import UserService.UserService.Service.UserService;

@RestController
@RequestMapping(value = "/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }
    
    @PostMapping(value = "/signin", consumes = "application/json")
    public boolean userLogin(@RequestBody Map<String, String> body) {
        return userService.userVerified(body.get("username"), body.get("password"));
    }

    @PostMapping(value = "/signup", consumes = "application/json")
    public boolean userSignup(@RequestBody Map<String, String> body) {
        return userService.usernameUnique(body.get("username"), body.get("password"), body.get("email"));
    }

    @GetMapping(value = "/details")
    @ResponseBody
    public Map<String,String> userDetails(@RequestParam String username) {
        return userService.findUser(username);
    }

    // Cart - create
    @PostMapping(value = "/cart", consumes = "application/json")
    public ResponseEntity<Cart> newCart(@RequestBody Cart cart) {
        Cart c = userService.createCart(cart);
        return new ResponseEntity<Cart>(c, HttpStatus.CREATED);
    }

    // Cart - read
    @GetMapping("/cart/{id}")
    public Collection<Cart> allCartItems(@PathVariable Long id) {
        return userService.getCartItems(id);
    }

    // Cart - update
    @PutMapping(value = "/cart", consumes = "application/json")
    public ResponseEntity<Cart> updateCartItems(@RequestBody Cart cart) {
        Cart c = userService.updateCart(cart);
        return new ResponseEntity<Cart>(c, HttpStatus.ACCEPTED);
    }

    // Cart - delete
    @DeleteMapping("/cart")
    public ResponseEntity<HttpStatus> deleteCartItem(@RequestBody Map<String, Long> body) {
        userService.deleteCart(body.get("userId"), body.get("cartId"), body.get("cartItemId"));
        return new ResponseEntity<HttpStatus>(HttpStatus.ACCEPTED);
    }

}
