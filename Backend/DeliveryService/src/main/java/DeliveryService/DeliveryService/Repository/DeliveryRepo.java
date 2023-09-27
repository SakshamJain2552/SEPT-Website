package DeliveryService.DeliveryService.Repository;
import DeliveryService.DeliveryService.Model.Delivery;

public interface DeliveryRepo {
    // Create a delivery
    public Delivery addDelivery(String username, String address, String date, String time, String paymentMethod);
    // Read a delivery
    public Delivery findDelivery(String orderID);
    
}
