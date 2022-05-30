import P from 'prop-types';
import { useState } from 'react';
import { ProjectContext } from './ProjectContext';

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  return (
    <ProjectContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectContext.Provider>
  );
};

ProjectProvider.propTypes = {
  children: P.node.isRequired,
};

export default ProjectProvider;
