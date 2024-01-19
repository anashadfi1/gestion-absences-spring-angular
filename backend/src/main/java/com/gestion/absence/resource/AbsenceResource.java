package com.gestion.absence.resource;

import com.gestion.absence.model.Absence;
import com.gestion.absence.model.Seance;
import com.gestion.absence.model.Student;
import com.gestion.absence.repository.AbsenceRepository;
import com.gestion.absence.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/absence")
@CrossOrigin(origins = "http://127.0.0.1:4200")
public class AbsenceResource {
    @Autowired
    AbsenceRepository absenceRepository;
    @Autowired
    StudentRepository studentRepository;
    @GetMapping(value = "/all")
    public List<Absence> getAll(){
        return absenceRepository.findAll();
    }
    @GetMapping(value = "/{studentid}")
    public List<Absence> getStudentAbsences(@PathVariable("studentid") Long id){
        return absenceRepository.findByStudentId(id);
    }

    @GetMapping("byId/{id}")
    public ResponseEntity<Absence> getAbsenceById(@PathVariable Long id) {
        // Find the student by ID in the repository
        Absence absence = absenceRepository.findById(id).orElse(null);

        // Check if the student is found
        if (absence != null) {
            return new ResponseEntity<>(absence, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping(value = "/add")
    public int addAbsence(@RequestBody final Absence absence){
        absenceRepository.save(absence);
        return 1;
    }

    @DeleteMapping(value = "/delete")
    public int delete(@RequestBody final Absence absence){
        absenceRepository.delete(absence);
        return 1;
    }
}
