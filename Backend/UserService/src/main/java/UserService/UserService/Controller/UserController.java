package UserService.UserService.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import UserService.UserService.Service.UserService;
import UserService.UserService.Model.User;

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
        // User information
        int userID = 0;
        String firstname = body.get("firstname");
        String lastname = body.get("lastname");
        String username = body.get("username");
        String password = body.get("password");
        String email = body.get("email");
        boolean notifications = Boolean.parseBoolean(body.get("notifications"));
        String cardName = body.get("cardName");
        int cardNumber = Integer.parseInt(body.get("cardNumber"));
        String cardExpiration = body.get("cardExpiration");
        int cardCVV = Integer.parseInt(body.get("cardCVV"));

        // New user object to be created
        User user = new User(userID, firstname, lastname, username, password, email, notifications, cardName, cardNumber, cardExpiration, cardCVV);
        return userService.createUser(user);
    }
}
