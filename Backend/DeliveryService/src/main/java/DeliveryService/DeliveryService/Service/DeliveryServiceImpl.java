package DeliveryService.DeliveryService.Service;

import DeliveryService.DeliveryService.Repository.DeliveryRepo;

public class DeliveryServiceImpl implements DeliveryService {
    private final DeliveryRepo deliveryRepo;

    public DeliveryServiceImpl(DeliveryRepo deliveryRepo) {
        this.deliveryRepo = deliveryRepo;
    }
}
