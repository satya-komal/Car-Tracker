package io.egen.controller;

import io.egen.entity.Readings;
import io.egen.entity.Vehicle;
import io.egen.service.ReadingService;
import io.egen.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins ="http://mocker.egen.io", maxAge = 3600)
@RestController
@RequestMapping(value = "readings")
public class ReadingsController  {

    @Autowired
    private ReadingService readingService;

    @RequestMapping(method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public void create( @RequestBody Readings readings) {
        readingService.create(readings);
        //readingService.getAlerts(readings);
    }
}