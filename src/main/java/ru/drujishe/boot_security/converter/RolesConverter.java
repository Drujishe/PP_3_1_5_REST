package ru.drujishe.boot_security.converter;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.tomcat.util.json.JSONParser;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;
import ru.drujishe.boot_security.model.Role;
import ru.drujishe.boot_security.service.RoleService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Component
public class RolesConverter implements Converter<String, Set<Role>> {

    private final RoleService roleService;

    public RolesConverter(RoleService roleService) {
        this.roleService = roleService;
    }

    @Override
    public Set<Role> convert(String text) {
        Set<Role> roles = new HashSet<>();
        JSONParser parser = new JSONParser(text);
        try {
            List<Object> list = parser.list();
            ObjectMapper mapper = new ObjectMapper();
            list.forEach(x -> roles.add(roleService.getRoleById(mapper.convertValue(x, Integer.class))));
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return roles;
    }
}
