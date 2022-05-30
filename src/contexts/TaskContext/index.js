import P from 'prop-types';
import { useState } from 'react';
import { TaskContext } from './TaskContext';

export const TaskProvider = ({ children }) => {
  const [task, setTasks] = useState([]);

  return (
    <TaskContext.Provider value={{ task, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

TaskProvider.propTypes = {
  children: P.node.isRequired,
};

export default TaskProvider;
