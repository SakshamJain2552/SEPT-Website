package UserService.UserService.Model;

public record User(
    Integer userID, String firstname, String lastname, String username, String password, String email,
    boolean notifications, String cardName, Integer cardNumber, String cardExpiration, Integer cardCVV
) 

{}