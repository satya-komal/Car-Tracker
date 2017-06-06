package io.egen.repository;

import io.egen.entity.Alerts;
import io.egen.entity.Readings;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Repository
public class AlertsRepoImpl implements AlertsRepo{
    @PersistenceContext
    private EntityManager em;

    @Override
    public void create(Alerts alerts) {
            em.persist(alerts);
    }
}
