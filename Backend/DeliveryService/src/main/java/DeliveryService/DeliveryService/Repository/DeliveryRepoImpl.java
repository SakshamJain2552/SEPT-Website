package DeliveryService.DeliveryService.Repository;
import DeliveryService.DeliveryService.Model.Delivery;

import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;
import java.sql.Connection;

@Repository
public class DeliveryRepoImpl implements DeliveryRepo{
    private final DataSource dataSource;

    public DeliveryRepoImpl(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public Delivery addDelivery(String username, String address, String date, String time, String paymentMethod) {
        Delivery delivery = new Delivery(username, address, date, time, paymentMethod);
        try {
            Connection connection = dataSource.getConnection();

            // Check if username exists
            PreparedStatement checkUsername = connection.prepareStatement(
                "SELECT Username FROM Users WHERE Username = '" + username + "';"
            );
            ResultSet usernameResult = checkUsername.executeQuery();

            if (!usernameResult.next()) {
                connection.close();
                throw new SQLException("Username does not exist");
            }

            // Get last delivery id
            PreparedStatement getDeliveries = connection.prepareStatement(
                "SELECT * FROM Deliveries;"
            );
            ResultSet deliveries = getDeliveries.executeQuery();
            int deliveryID = 0;
            while (deliveries.next()) {
                deliveryID = deliveries.getInt(1);
            }

            // Create delivery
            deliveryID++;
            PreparedStatement createDelivery = connection.prepareStatement(
                "INSERT INTO Deliveries\r\n" + //
                "VALUES (" + deliveryID + ",'" + username + "','"  + address + "','" + date + "','" + time + "','" + paymentMethod + "');"
            );
            createDelivery.executeUpdate();
            connection.close();
            return delivery;
        }

        catch (SQLException e) {
            throw new RuntimeException("Error in DeliveryRepoImpl.java - addDelivery()", e);
        }
    }
}
