package io.egen.repository;

import io.egen.entity.Vehicle;
import java.util.List;

public interface VehicleRepo {

    void create(List<Vehicle> vehicle);
    void update(List<Vehicle> vehicle);

    Vehicle findbyVin (String Vin);
}
