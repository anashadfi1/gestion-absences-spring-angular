package com.gestion.absence.repository;

import com.gestion.absence.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users,Long>{
  Users findByUsername(String username);

  Users findByPassword(String name);
  Users findByRole(String role);
}
