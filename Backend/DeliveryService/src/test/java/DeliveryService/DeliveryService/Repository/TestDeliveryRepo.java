package DeliveryService.DeliveryService.Repository;

import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.beans.factory.annotation.Autowired;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import DeliveryService.DeliveryService.Model.Delivery;

@SpringBootTest
public class TestDeliveryRepo {
    @Autowired
    private DeliveryRepo deliveryRepo;

    @Test
    public void testAddDelivery() {
        Delivery testDelivery = new Delivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        Delivery returnedDelivery = deliveryRepo.addDelivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        assertEquals(testDelivery, returnedDelivery);
    }

    @Test
    public void testFindDelivery() {
        Delivery testDelivery = new Delivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        Delivery returnedDelivery = deliveryRepo.findDelivery("alice123");
        assertEquals(testDelivery, returnedDelivery);
    }
}
