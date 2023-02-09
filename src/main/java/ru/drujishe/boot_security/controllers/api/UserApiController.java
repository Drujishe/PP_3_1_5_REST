package ru.drujishe.boot_security.controllers.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.drujishe.boot_security.model.Person;
import ru.drujishe.boot_security.service.UserService;

import java.security.Principal;

@RestController
@RequestMapping("/api/user")
public class UserApiController {
    private final UserService userService;

    public UserApiController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/show")
    public ResponseEntity<Person> showUser(Principal principal) {
        return ResponseEntity.ok(userService.getPersonByUsername(principal.getName()));
    }

}
