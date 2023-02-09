package ru.drujishe.boot_security.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.drujishe.boot_security.dao.RoleDao;
import ru.drujishe.boot_security.model.Role;

import java.util.List;

@Service
@Transactional
public class RoleServiceImp implements RoleService {
    private final RoleDao roleDao;

    public RoleServiceImp(RoleDao roleDao) {
        this.roleDao = roleDao;
    }

    @Override
    public void add(Role role) {
        roleDao.add(role);
    }

    @Override
    public Role getRoleById(long id) {
        return roleDao.getRoleById(id);
    }

    @Override
    public List<Role> getAll() {
        return roleDao.getAll();
    }
}
