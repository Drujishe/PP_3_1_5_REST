package ru.drujishe.boot_security.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "table_roles")
public class Role implements GrantedAuthority {
    @JsonProperty("roleName")
    private String roleName;
    @Id @JsonProperty("roleId")
    private long roleId;

    public Role() {
    }

    @ManyToMany(mappedBy = "roles")
    @JsonBackReference
    Set<Person> users = new HashSet<>();

    public Set<Person> getUsers() {
        return users;
    }

    public void setUsers(Set<Person> users) {
        this.users = users;
    }

    public Role(long roleId, String roleName) {
        this.roleName = roleName;
        this.roleId = roleId;
    }

    public Role(long roleId) {
        this(roleId, getAllRoles().get((int) roleId).roleName);
    }

    public Role(String roleName, long roleId, Set<Person> users) {
        this.roleName = roleName;
        this.roleId = roleId;
        this.users = users;
    }

    public Role(long id, String roleName, long roleId) {
        this.roleName = roleName;
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public long getRoleId() {
        return roleId;
    }

    public void setRoleId(long roleId) {
        this.roleId = roleId;
    }

    @Override
    public String toString() {
        return "Role{" +
                "roleName='" + roleName + '\'' +
                '}';
    }

    public static List<Role> getAllRoles() {
        return Arrays.asList(
                Admin(),
                User()
//                new Role(2, "ROLE_TEST")
        );
    }

    public static Role Admin() {
        return new Role(0, "ROLE_ADMIN");
    }

    public static Role User() {
        return new Role(1, "ROLE_USER");
    }

    @Override
    public String getAuthority() {
        return roleName;
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(roleId);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        return this.hashCode() == obj.hashCode();
    }
}
