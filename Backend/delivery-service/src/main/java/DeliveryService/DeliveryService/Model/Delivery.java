package DeliveryService.DeliveryService.Model;

public record Delivery (int deliveryID, String username, String address, String deliveryDate, String deliveryTime, String paymentMethod) {
}
