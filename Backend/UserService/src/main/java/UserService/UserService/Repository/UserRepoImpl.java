package UserService.UserService.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.stereotype.Repository;

@Repository
public class UserRepoImpl implements UserRepo {
    private final DataSource dataSource;

    public UserRepoImpl(DataSource dataSource){
        this.dataSource = dataSource;
    }

    @Override
    public boolean userFound(String username, String password) {
        
        try {
            Connection connection = dataSource.getConnection();
            PreparedStatement stm = connection.prepareStatement(
                "SELECT UserID, Username, Password, Email\r\n" + //
                "FROM Users;"
            );

            ResultSet rs = stm.executeQuery();

            System.out.println("Given username and password: " + username + " - " + password);
            while(rs.next()) {
                if (rs.getString(2).equals(username) && rs.getString(3).equals(password)) {
                    System.out.println("Verified: " + rs.getString(2) + " " + rs.getString(3));
                    connection.close();
                    return true;
                }
            }

            connection.close();
            return false;
            
        } catch (SQLException e) {
            throw new RuntimeException("Error in findAll()", e);
        }

    }

}
