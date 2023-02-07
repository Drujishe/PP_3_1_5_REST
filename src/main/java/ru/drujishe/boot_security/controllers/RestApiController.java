package ru.drujishe.boot_security.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.drujishe.boot_security.model.Person;
import ru.drujishe.boot_security.service.UserService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class RestApiController {
    private final UserService userService;

    public RestApiController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/list")
    public List<String> allUsers() {
        return userService.getAll().stream()
                .map(Person::toString)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public String getUserById(@PathVariable("id") long id) {
        return userService.getUserById(id).toString();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") long id){
        userService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable("id") long id,
                       @RequestBody Person person){
        userService.update(id,person);
    }

}
