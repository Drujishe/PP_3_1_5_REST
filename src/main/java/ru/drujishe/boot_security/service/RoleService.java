package ru.drujishe.boot_security.service;

import ru.drujishe.boot_security.model.Role;

import java.util.List;

public interface RoleService {
    void add(Role role);
    Role getRoleById(long id);
    List<Role> getAll();
}
