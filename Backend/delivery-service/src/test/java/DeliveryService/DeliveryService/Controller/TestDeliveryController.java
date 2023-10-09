package DeliveryService.DeliveryService.Controller;

import java.util.List;
import java.util.ArrayList;

import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;


import DeliveryService.DeliveryService.Contoller.DeliveryController;
import DeliveryService.DeliveryService.Service.DeliveryService;
import DeliveryService.DeliveryService.Model.Delivery;

@SpringBootTest
public class TestDeliveryController {
    private MockMvc mockMvc;
    @Mock
    private DeliveryService deliveryService;
    private DeliveryController deliveryController;

    @BeforeEach
    public void setUp() {
        deliveryController = new DeliveryController(deliveryService);
    }

    @Test
    public void testControllerCreateDelivery() throws Exception {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(new DeliveryController(deliveryService)).build();

        Delivery delivery = new Delivery(1, "alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");

        when(deliveryService.setDelivery("alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card")).thenReturn(delivery);

        mockMvc.perform(MockMvcRequestBuilders.post("/delivery/setDelivery")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"username\": \"alice123\",\"address\": \"1 Alice Street, Victoria\",\"date\": \"1-1-2023\",\"time\": \"12:00\",\"paymentMethod\": \"card\"}")
        )
        .andExpect(MockMvcResultMatchers.status().isCreated())
        .andExpect(MockMvcResultMatchers.content().contentType(MediaType.APPLICATION_JSON))
        .andExpect(MockMvcResultMatchers.jsonPath("$['username']").value("alice123"))
        .andExpect(MockMvcResultMatchers.jsonPath("$['address']").value("1 Alice Street, Victoria"))
        .andExpect(MockMvcResultMatchers.jsonPath("$['deliveryDate']").value("1-1-2023"))
        .andExpect(MockMvcResultMatchers.jsonPath("$['deliveryTime']").value("12:00"))
        .andExpect(MockMvcResultMatchers.jsonPath("$['paymentMethod']").value("card"));

    }
    
    @Test
    public void testDeliveryDetails() {
        Delivery testDelivery = new Delivery(1, "alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        when(deliveryService.getDelivery("1")).thenReturn(testDelivery);
        Delivery returnedDelivery = deliveryController.deliveryDetails("1");
        assertEquals(testDelivery, returnedDelivery);
    }

    @Test
    public void testDeliveryDetailsByUser() {
        Delivery testDelivery = new Delivery(1, "alice123", "1 Alice Street, Victoria", "1-1-2023", "12:00", "card");
        List<Delivery> testDeliveries = new ArrayList<>();
        testDeliveries.add(testDelivery);
        when(deliveryService.getDeliveryByUser("alice123")).thenReturn(testDeliveries);
        List<Delivery> returnedDeliveries = deliveryController.deliveryDetailsByUser("alice123");
        assertEquals(testDeliveries, returnedDeliveries);
    }
}
