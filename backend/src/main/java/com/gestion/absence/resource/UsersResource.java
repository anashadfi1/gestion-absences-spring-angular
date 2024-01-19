package com.gestion.absence.resource;


import com.gestion.absence.model.Professor;
import com.gestion.absence.model.Student;
import com.gestion.absence.model.Users;
import com.gestion.absence.repository.ProfessorRepository;
import com.gestion.absence.repository.StudentRepository;
import com.gestion.absence.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import javax.validation.Valid;
import java.util.Optional;
import java.util.Map;
import java.util.HashMap;

import java.util.List;
@RestController
@RequestMapping(value = "/api/users")
@CrossOrigin(origins = "http://127.0.0.1:4200")
public class UsersResource{

  @Autowired
  UsersRepository usersRepository;
  ProfessorRepository professorRepository;
  StudentRepository studentRepository;
  @GetMapping(value = "/all")
  public ResponseEntity<List<Users>> getAllUsers() {
    List<Users> users = usersRepository.findAll();
    return ResponseEntity.ok(users);
  }
  @GetMapping("/byId/{id}")
  public ResponseEntity<Users> getUsersById(@PathVariable Long id) {
    // Find the user by ID in the repository
    Optional<Users> userOptional = usersRepository.findById(id);

    // Check if the user is found
    if (userOptional.isPresent()) {
      return new ResponseEntity<>(userOptional.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @GetMapping("/byUsername/{name}")
  public ResponseEntity<Users> getUsersByUserName(@PathVariable String name) {
    // Find the user by username in the repository
    Users user = usersRepository.findByUsername(name);

    // Check if the user is found
    if (user != null) {
      return new ResponseEntity<>(user, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @GetMapping("/byRole/{role}")
  public ResponseEntity<Users> getUsersByRole(@PathVariable String role) {
    // Find the user by role in the repository
    Users user = usersRepository.findByRole(role);

    // Check if the user is found
    if (user != null) {
      return new ResponseEntity<>(user, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @GetMapping("/byPassword/{password}")
  public ResponseEntity<Users> getByPassword(@PathVariable String password) {
    // Find the user by password in the repository (Note: Storing plain passwords in the repository is not recommended)
    Users user = usersRepository.findByPassword(password);

    // Check if the user is found
    if (user != null) {
      return new ResponseEntity<>(user, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }


  @PostMapping("/add")
  public ResponseEntity<String> addUser(@Valid @RequestBody Users users) {
    try {
      usersRepository.save(users);
      return ResponseEntity.status(HttpStatus.CREATED).body("User added successfully");
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add user");
    }
  }

  @PutMapping(value = "/update")
  public ResponseEntity<String> updateUser(@Valid @RequestBody Users users) {
    try {
      usersRepository.save(users);
      return ResponseEntity.ok("User updated successfully");
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user");
    }
  }

  @DeleteMapping(value = "delete/{id}")
  public ResponseEntity<String> deleteUser(@PathVariable long id) {
    try {
      usersRepository.deleteById(id);
      return ResponseEntity.ok("User deleted successfully");
    } catch (Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user");
    }
  }
//  @GetMapping("/login")
//  public String showLoginForm() {
//    return "login";
//  }

  @PostMapping("/login")
  public Users processLogin(@RequestBody Users user) {

        Users fetcheduser = usersRepository.findByUsername(user.getUsername());
        if(fetcheduser.getUsername().equals(user.getUsername()) && fetcheduser.getPassword().equals(user.getPassword())){
          return fetcheduser;
        }
        return null;
  }



  @GetMapping("/welcome")
  public String showWelcomePage() {
    return "welcome";
  }
}

