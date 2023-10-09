package DeliveryService.DeliveryService.Repository;
import DeliveryService.DeliveryService.Model.Delivery;
import java.util.List;

public interface DeliveryRepo {
    // Create a delivery
    public Delivery addDelivery(String username, String address, String date, String time, String paymentMethod);
    // Read a delivery by deliveryID
    public Delivery findDelivery(String deliveryID);
    // Read a delivery by username
    public List<Delivery> findDeliveryByUser(String username);
}
