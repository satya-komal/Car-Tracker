package io.egen.service;

import io.egen.entity.Vehicle;
import org.springframework.stereotype.Service;

import java.util.List;

public interface VehicleService {


    void createOrUpdate(List<Vehicle> vehicle);
    //void update_vehicle_db(List<Vehicle> vehicle);
    //void create_vehicle_db(List<Vehicle> vehicle);

    /*
    List<Vehicle> findAll();
    Vehicle findOne(String id);
   Vehicle update(String id, Vehicle vehicle);
    void delete(String id);
    */
}
