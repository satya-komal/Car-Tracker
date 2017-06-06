package io.egen.repository;

import io.egen.entity.Alerts;
import io.egen.entity.Readings;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Repository
public class ReadingsRepoImpl implements ReadingsRepo {

    @PersistenceContext
    private EntityManager em;

    @Override
    public void create(Readings readings) {
            em.persist(readings.getTires());
            em.persist(readings);
    }

    public Readings findbyVin(String Vin) {
        TypedQuery<Readings> query = em.createNamedQuery("Readings.findById", Readings.class);
        query.setParameter("vehicle_id", Vin);
        List<Readings> resultList = query.getResultList();
        int l=resultList.size();
        if (resultList != null && l>=1) {
            return resultList.get(l-1);
        } else {
            return null;
        }
    }
}
