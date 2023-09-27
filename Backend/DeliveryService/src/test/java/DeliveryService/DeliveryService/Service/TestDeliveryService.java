package DeliveryService.DeliveryService.Service;

import org.springframework.boot.test.context.SpringBootTest;
import org.mockito.Mock;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import DeliveryService.DeliveryService.Model.Delivery;
import DeliveryService.DeliveryService.Repository.DeliveryRepo;
import DeliveryService.DeliveryService.Service.DeliveryServiceImpl;

@SpringBootTest
public class TestDeliveryService {
    @Mock
    private DeliveryRepo deliveryRepo;
    private DeliveryServiceImpl deliveryService;

    @BeforeEach
    public void setUp() {
        deliveryService = new DeliveryServiceImpl(deliveryRepo);
    }

    @Test
    public void testServiceSetDelivery() {
        Delivery testDelivery = new Delivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        when(deliveryRepo.addDelivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card")).thenReturn(testDelivery);
        Delivery createdDelivery = deliveryService.setDelivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");

        assertNotNull(createdDelivery);
        assertEquals(testDelivery, createdDelivery);
    }

    @Test
    public void testGetDelivery() {
        Delivery testDelivery = new Delivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        when(deliveryRepo.findDelivery("alice123")).thenReturn(testDelivery);
        Delivery createdDelivery = deliveryService.getDelivery("alice123");

        assertNotNull(createdDelivery);
        assertEquals(testDelivery, createdDelivery);
    }
}
