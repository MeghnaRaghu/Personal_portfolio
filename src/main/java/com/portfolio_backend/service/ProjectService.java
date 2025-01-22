package com.portfolio.portfolio_backend.service;

import com.portfolio.portfolio_backend.model.Project;
import com.portfolio.portfolio_backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    // Get all projects
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Get project by ID
    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    // Save or update a project
    public Project saveOrUpdateProject(Project project) {
        return projectRepository.save(project);
    }

    // Delete project by ID
    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
