package com.byon.communityservice.communityservice;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class HomeController {
 
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
    
    @RequestMapping(value = "/health")
    public Greeting health() {
        return new Greeting(1, "we good fam");
    }
}