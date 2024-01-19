package com.gestion.absence.resource;

import com.gestion.absence.model.Professor;
import com.gestion.absence.repository.ProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(value = "/api/professor")
@CrossOrigin(origins = "http://127.0.0.1:4200")
public class ProfessorResource {
    @Autowired
    ProfessorRepository professorRepository;

    @GetMapping(value = "/all")
    public ResponseEntity<List<Professor>> getAllUsers() {
        List<Professor> professors = professorRepository.findAll();
        return ResponseEntity.ok(professors);
    }

    @PostMapping(value = "/addProf")
    public ResponseEntity<String> addUser(@Valid @RequestBody Professor professor) {
        try {
            professorRepository.save(professor);
            return ResponseEntity.status(HttpStatus.CREATED).body("Prof added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add user");
        }
    }

    @PutMapping(value = "/update")
    public ResponseEntity<String> updateUser(@Valid @RequestBody Professor professor) {
        try {
            professorRepository.save(professor);
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user");
        }
    }
}