package com.byon.communityservice.communityservice;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@RestController
public class HomeController {

    PreferencesRepository preferencesRepo = new PreferencesRepository<Preferences, Long>();
 
    @RequestMapping(value = "/health")
    public Greeting health() {
        return new Greeting(1, "we good fam");
    }

    @RequestMapping(value = "/preferences/{userId}", method = RequestMethod.POST)
    public void enterPreferenceData(
        @PathVariable String userId,
        @RequestParam(value = "location", required = true) String location,
        @RequestParam(value = "radius", required = true) int radius,
        @RequestParam(value = "hospitals", required = true) boolean hospitals,
        @RequestParam(value = "churches", required = true) boolean churches,
        @RequestParam(value = "libraries", required = true) boolean libraries,
        @RequestParam(value = "schools", required = true) boolean schools){
            preferencesRepo.save(location, radius, hospitals, churches, libraries, schools);
    }

}