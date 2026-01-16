function Projects() {
  return (
    <section id="projects" className="section">
      <h3>Projects</h3>

      <div className="project-card">
        <h4>JobHub – Job Aggregation Platform</h4>
        <p>
          Backend-focused system exposing REST APIs for job aggregation,
          filtering, and pagination.
        </p>
        <p><strong>Tech:</strong> Java, Spring Boot, PostgreSQL, JPA</p>
        <a href="https://github.com/NkanyisoMz/JobHubApplication" target="_blank">
          GitHub
        </a>
      </div>

      <div className="project-card">
        <h4>Private Events</h4>
        <p>
          Event management platform with authentication and
          many-to-many relationships.
        </p>
        <p><strong>Tech:</strong> Ruby on Rails, ActiveRecord, PostgreSQL</p>
        <a href="https://github.com/NkanyisoMz" target="_blank">
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
