package ru.drujishe.boot_security.dao;

import ru.drujishe.boot_security.model.Role;

import java.util.List;

public interface RoleDao {
    void add(Role role);
    Role getRoleById(long id);
    List<Role> getAll();
}
