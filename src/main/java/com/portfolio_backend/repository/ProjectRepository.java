package com.portfolio.portfolio_backend.repository;

import com.portfolio.portfolio_backend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    // Custom query methods can be added here if needed
}
