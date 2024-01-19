package com.gestion.absence.repository;

import com.gestion.absence.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository  extends JpaRepository<Student,Integer> {
  List<Student> findByClassId(int class_id);
  Student findById(int id);
}
