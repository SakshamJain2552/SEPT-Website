package UserService.UserService.Model;

public record User(
    Integer userID, String firstname, String lastname, String username, String password, String email, String address,
    boolean notifications, String cardName, Long cardNumber, String cardExpiration, Integer cardCVV
) 

{}