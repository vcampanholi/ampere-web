package com.vandersoncamp.ampereweb.util;

import javax.enterprise.inject.Produces;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class PersistenceManager {

    @Produces
    @PersistenceContext(unitName = "amperewebPU")
    private EntityManager em;

    public EntityManager getEntityManager() {
        return em;
    }
}