package controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/super-price")
public class SuperPriceController {
    @GetMapping
    public String all() {
        return "Hello world!";
    }
}
