package DeliveryService.DeliveryService.Service;

import org.junit.jupiter.api.BeforeEach;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import DeliveryService.DeliveryService.Repository.DeliveryRepo;

@SpringBootTest
public class TestDeliveryService {

    @Mock
    private DeliveryRepo deliveryRepo;
    private DeliveryServiceImpl deliveryService;

    @BeforeEach
    public void setup(){
        deliveryService = new DeliveryServiceImpl(deliveryRepo);
    }
}
