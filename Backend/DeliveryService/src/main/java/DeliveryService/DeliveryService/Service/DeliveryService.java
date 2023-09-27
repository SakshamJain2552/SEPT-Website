package DeliveryService.DeliveryService.Service;
import DeliveryService.DeliveryService.Model.Delivery;

public interface DeliveryService {
    // Create a delivery
    public Delivery setDelivery(String username, String address, String date, String time, String paymentMethod);
}
