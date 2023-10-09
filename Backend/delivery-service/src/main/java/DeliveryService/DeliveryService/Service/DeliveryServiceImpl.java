package DeliveryService.DeliveryService.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import DeliveryService.DeliveryService.Repository.DeliveryRepo;
import DeliveryService.DeliveryService.Model.Delivery;

@Service
public class DeliveryServiceImpl implements DeliveryService {
    private final DeliveryRepo deliveryRepo;

    @Autowired
    public DeliveryServiceImpl(DeliveryRepo deliveryRepo) {
        this.deliveryRepo = deliveryRepo;
    }

    @Override
    public Delivery setDelivery(String username, String address, String date, String time, String paymentMethod) {
        return deliveryRepo.addDelivery(username, address, date, time, paymentMethod);
    }

    @Override
    public Delivery getDelivery(String deliveryID) {
        return deliveryRepo.findDelivery(deliveryID);
    }

    @Override
    public List<Delivery> getDeliveryByUser(String username) {
        return deliveryRepo.findDeliveryByUser(username);
    }
}
