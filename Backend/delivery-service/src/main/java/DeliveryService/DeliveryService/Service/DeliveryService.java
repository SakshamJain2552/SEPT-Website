package DeliveryService.DeliveryService.Service;
import DeliveryService.DeliveryService.Model.Delivery;
import java.util.List;

public interface DeliveryService {
    // Create a delivery
    public Delivery setDelivery(String username, String address, String date, String time, String paymentMethod);
    // Read a delivery by deliveryID
    public Delivery getDelivery(String deliveryID);
    // Read a delivery by username
    public List<Delivery> getDeliveryByUser(String username);
}
