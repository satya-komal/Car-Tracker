package io.egen.controller;

import io.egen.entity.Alerts;
import io.egen.entity.Readings;
import io.egen.service.AlertService;
import io.egen.service.ReadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Async;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "alerts")
public class AlertsController {

   @Autowired
    private AlertService alertService;

    @RequestMapping(method = RequestMethod.GET,
            consumes = MediaType.APPLICATION_JSON_UTF8_VALUE,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @Async
    public void getAlerts( List<Readings> readings) {
        //alertService.create(readings);
    }
}
