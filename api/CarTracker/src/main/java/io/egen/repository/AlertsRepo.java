package io.egen.repository;
import io.egen.entity.Alerts;
import io.egen.entity.Readings;

import java.util.List;

public interface AlertsRepo {
    void create(Alerts alerts);
}
