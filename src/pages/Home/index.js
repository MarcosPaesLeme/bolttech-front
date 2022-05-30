import { useContext, useEffect, useState } from 'react';
import { Container, Projects, Add } from './styles';
import Project from '../../components/Project';
import { ProjectContext } from '../../contexts/ProjectContext/ProjectContext';
import api from '../../services/api';
import { UserContext } from '../../contexts/UserContext/UserContext';

const Home = () => {
  const { projects, setProjects } = useContext(ProjectContext);
  const { user, setUser } = useContext(UserContext);
  const [project, setProject] = useState({ projectName: '' });

  useEffect(() => {
    async function loadProjects() {
      const { data } = await api.get(`projects/byUser/${user.id}`, {
        headers: {
          'x-api-key': 'bolttech',
        },
      });

      setProjects(data);
    }

    loadProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(
      `projects`,
      {
        userId: user.id,
        name: project.projectName,
      },
      {
        headers: {
          'x-api-key': 'bolttech',
        },
      },
    );

    setProject({ projectName: '' });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <Container>
        <Projects>
          {!projects && <h1>Projects not available</h1>}
          {projects &&
            projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
        </Projects>
        <Add>
          <h3>Create a new project</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="projectName"
              placeholder="Project name"
              onChange={handleChange}
              value={project.projectName}
            />

            <button type="submit">Create Project</button>
          </form>
        </Add>
      </Container>
    </>
  );
};

export default Home;
