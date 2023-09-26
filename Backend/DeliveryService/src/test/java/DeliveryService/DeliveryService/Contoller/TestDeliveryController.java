package DeliveryService.DeliveryService.Contoller;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import DeliveryService.DeliveryService.Service.DeliveryService;

@SpringBootTest
public class TestDeliveryController {

    @Mock
    private DeliveryService deliveryService;
    private DeliveryController deliveryController;  

    @BeforeEach
    public void setup() {
        deliveryController = new DeliveryController(deliveryService);
    }
}
