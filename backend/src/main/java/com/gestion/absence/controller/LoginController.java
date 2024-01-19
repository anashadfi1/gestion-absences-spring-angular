package com.gestion.absence.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String showLoginForm() {
        return "login";
    }

    @PostMapping("/login")
    public ResponseEntity<String> processLogin(@RequestParam String username, @RequestParam String password, Model model) {
        // In a real application, you would typically validate the username and password against a database
        // For simplicity, let's just check if the username is "user" and password is "password"
        if ("user".equals(username) && "password".equals(password)) {
            return ResponseEntity.ok("Welcome, " + username + "!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @GetMapping("/welcome")
    public String showWelcomePage() {
        return "welcome";
    }
}

