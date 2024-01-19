package com.gestion.absence.repository;

import com.gestion.absence.model.Absence;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface AbsenceRepository extends JpaRepository<Absence,Long> {
    List<Absence> findByStudentId(Long student_id);
    Optional<Absence> findById(Long id);
}
