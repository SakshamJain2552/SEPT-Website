package DeliveryService.DeliveryService.Contoller;
import DeliveryService.DeliveryService.Model.Delivery;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import DeliveryService.DeliveryService.Service.DeliveryService;

@RestController
@CrossOrigin
@RequestMapping(value = "/delivery")
public class DeliveryController {
    private final DeliveryService deliveryService;

    @Autowired
    public DeliveryController(DeliveryService deliveryService) {
        this.deliveryService = deliveryService;
    }

    @CrossOrigin
    @PostMapping(value = "/setDelivery", consumes = "application/json")
    public ResponseEntity<Delivery> createDelivery(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String address = body.get("address");
        String date = body.get("date");
        String time = body.get("time");
        String paymentMethod = body.get("paymentMethod");

        Delivery delivery =  deliveryService.setDelivery(username, address, date, time, paymentMethod);
        return new ResponseEntity<Delivery>(delivery, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public Delivery deliveryDetails(@PathVariable("id") String id) {
        return deliveryService.getDelivery(id);
    }
}
