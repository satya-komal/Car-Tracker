package io.egen.repository;

import io.egen.entity.Alerts;
import io.egen.entity.Readings;
import io.egen.entity.Vehicle;

import java.util.List;

public interface ReadingsRepo {
     void create(Readings readings);
     //void createAlerts(List<Alerts> alerts);
     Readings findbyVin(String Vin);
}
