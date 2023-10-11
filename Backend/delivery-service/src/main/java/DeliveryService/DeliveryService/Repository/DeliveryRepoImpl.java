package DeliveryService.DeliveryService.Repository;
import DeliveryService.DeliveryService.Model.Delivery;

import java.util.List;
import java.util.ArrayList;

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
        try {
            Connection connection = dataSource.getConnection();

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

            Delivery delivery = new Delivery(deliveryID, username, address, date, time, paymentMethod);
            return delivery;
        }

        catch (SQLException e) {
            throw new RuntimeException("Error in DeliveryRepoImpl.java - addDelivery()", e);
        }
    }

    @Override
    public Delivery findDelivery(String deliveryID) {

        try {
            Connection connection = dataSource.getConnection();

            // Check if orderID exists
            PreparedStatement checkOrderID = connection.prepareStatement(
                "SELECT DeliveryID FROM Deliveries WHERE DeliveryID = '" + deliveryID + "';"
            );

            ResultSet orderIDResult = checkOrderID.executeQuery();
            if (!orderIDResult.next()) {
                connection.close();
                throw new SQLException("Order does not exist");
            }

            // Get delivery
            PreparedStatement getDelivery = connection.prepareStatement(
                "SELECT * FROM Deliveries WHERE DeliveryID = '" + deliveryID + "';"
            );

            ResultSet deliveryResult = getDelivery.executeQuery();

            deliveryResult.next();

            int id = deliveryResult.getInt(1);
            String username = deliveryResult.getString(2);
            String address = deliveryResult.getString(3);
            String date = deliveryResult.getString(4);
            String time = deliveryResult.getString(5);
            String paymentMethod = deliveryResult.getString(6);

            Delivery delivery = new Delivery(id, username, address, date, time, paymentMethod);

            connection.close();
            return delivery;
            
        }

        catch (SQLException e) {
            throw new RuntimeException("Error in DeliveryRepoImpl.java - findDelivery()", e);
        }
    }

    @Override
    public List<Delivery> findDeliveryByUser(String username) {
        List<Delivery> deliveries = new ArrayList<>();
        try {
            Connection connection = dataSource.getConnection();

            // Check if user has existing orders
            PreparedStatement checkOrderID = connection.prepareStatement(
                "SELECT Username FROM Deliveries WHERE Username = '" + username + "';"
            );

            ResultSet orderIDResult = checkOrderID.executeQuery();
            if (!orderIDResult.next()) {
                connection.close();
                throw new SQLException("Order does not exist");
            }

            // Get delivery
            PreparedStatement getDelivery = connection.prepareStatement(
                "SELECT * FROM Deliveries WHERE Username = '" + username + "';"
            );

            ResultSet deliveryResult = getDelivery.executeQuery();

            while(deliveryResult.next()) {
                int id = deliveryResult.getInt(1);
                String user = deliveryResult.getString(2);
                String address = deliveryResult.getString(3);
                String date = deliveryResult.getString(4);
                String time = deliveryResult.getString(5);
                String paymentMethod = deliveryResult.getString(6);

                Delivery delivery = new Delivery(id, user, address, date, time, paymentMethod);
                deliveries.add(delivery);
            }

            connection.close();
            return deliveries;
        }

        catch (SQLException e) {
            throw new RuntimeException("Error in DeliveryRepoImpl.java - findDeliveryByUser()", e);
        }
    }
}
