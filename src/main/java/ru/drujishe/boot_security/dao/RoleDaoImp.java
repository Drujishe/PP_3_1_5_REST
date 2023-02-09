package ru.drujishe.boot_security.dao;

import org.springframework.stereotype.Repository;
import ru.drujishe.boot_security.model.Person;
import ru.drujishe.boot_security.model.Role;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class RoleDaoImp implements RoleDao {
    @PersistenceContext
    EntityManager manager;

    @Override
    public void add(Role role) {
        manager.persist(role);
    }

    @Override
    public Role getRoleById(long id) {
        return manager.createQuery("" +
                        "select distinct role from Role role " +
                        "join fetch role.users users " +
                        "where role.id= :id", Role.class)
                .setParameter("id", id)
                .getSingleResult();
    }

    @Override
    public List<Role> getAll() {
        return manager.createQuery("" +
                        "select distinct role from Role role " +
                        "join fetch role.users users " +
                        "order by role.roleId", Role.class)
                .getResultList();
    }
}
