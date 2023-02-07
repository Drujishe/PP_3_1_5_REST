package ru.drujishe.boot_security.dao;

import org.springframework.stereotype.Repository;
import ru.drujishe.boot_security.model.Role;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
public class RoleDaoImp implements RoleDao {
    @PersistenceContext
    EntityManager manager;

    @Override
    public void add(Role role) {
        manager.persist(role);
    }
}
