package com.gestion.absence.resource;

import com.gestion.absence.model.Student;
import com.gestion.absence.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
@RestController
@RequestMapping(value = "/api/students")
@CrossOrigin(origins = "http://127.0.0.1:4200")

public class StudentsResource {

        @Autowired
        StudentRepository studentRepository;

        @GetMapping(value = "/all")
        public List<Student> getAll(){
            return studentRepository.findAll();
        }
        @GetMapping("byId/{id}")
        public ResponseEntity<Student> getStudentById(@PathVariable Integer id) {
        // Find the student by ID in the repository
        Student student = studentRepository.findById(id).orElse(null);

        // Check if the student is found
        if (student != null) {
            return new ResponseEntity<>(student, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
       @GetMapping("/byGroup/{id}")
        public List<Student> getStudentsByC(@PathVariable int id) {
          return studentRepository.findByClassId(id);
        }
        @PostMapping("/add")
        public int addStudent(@RequestBody final Student student){
            studentRepository.save(student);
            return 1;
        }

       @PutMapping(value = "/update")
        public int update(@RequestBody final Student student){
            studentRepository.save(student);
            return 1;
        }
    @PutMapping("/togglePresence/{id}")
    public String togglePresence(@PathVariable int id) {
            Student student = studentRepository.findById(id);

            student.setIsPresent(!student.getIsPresent());
            studentRepository.save(student);

        return "changed";
    }


    @DeleteMapping(value = "/{id}")
        public int delete(@PathVariable int id){
            studentRepository.deleteById(id);
            return 1;
        }
    }
