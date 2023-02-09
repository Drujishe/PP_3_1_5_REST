package ru.drujishe.boot_security.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.drujishe.boot_security.model.Person;
import ru.drujishe.boot_security.service.UserService;


@Controller
@RequestMapping("/admin")
public class AdminController {

    @GetMapping
    public String showUsers() {
        return "/admin/index";
    }

    @GetMapping(value = "/new")
    public String createPage() {
        return "/admin/new";
    }
}
