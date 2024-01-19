package com.gestion.absence.repository;


import com.gestion.absence.model.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRepository extends JpaRepository<Professor,Long> {
    Professor findByClassId(String classId);
    Professor findByName(String name);
}
