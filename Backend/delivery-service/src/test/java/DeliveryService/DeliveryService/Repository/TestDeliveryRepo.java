package DeliveryService.DeliveryService.Repository;

import java.util.List;
import java.util.ArrayList;

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
        Delivery testDelivery = new Delivery(1, "alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        Delivery returnedDelivery = deliveryRepo.addDelivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        assertEquals(testDelivery.username(), returnedDelivery.username());
        assertEquals(testDelivery.address(), returnedDelivery.address());
        assertEquals(testDelivery.deliveryDate(), returnedDelivery.deliveryDate());
        assertEquals(testDelivery.deliveryTime(), returnedDelivery.deliveryTime());
        assertEquals(testDelivery.paymentMethod(), returnedDelivery.paymentMethod());
    }

    @Test
    public void testFindDelivery() {
        Delivery testDelivery = new Delivery(1, "alice123", "1 Alice Street, Victoria", "01-01-2023", "12:00", "card");
        Delivery returnedDelivery = deliveryRepo.findDelivery("1");
        assertEquals(testDelivery, returnedDelivery);
    }

    @Test
    public void testFindDeliveryByUser() {
        Delivery testDelivery = new Delivery(1, "alice123", "1 Alice Street, Victoria", "01-01-2023", "12:00", "card");
        List<Delivery> testDeliveries = new ArrayList<>();
        testDeliveries.add(testDelivery);
        List<Delivery> returnedDeliveries = deliveryRepo.findDeliveryByUser("alice123");
        assertEquals(testDeliveries.get(0), returnedDeliveries.get(0));
    }
}
