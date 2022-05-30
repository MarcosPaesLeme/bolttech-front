import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
import { GlobalStyles } from './styles/global-styles';
import { theme } from './styles/theme';

import UserProvider from './contexts/UserContext';
import ProjectProvider from './contexts/ProjectContext';
import TaskProvider from './contexts/TaskContext';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserProvider>
          <ProjectProvider>
            <TaskProvider>
              <Router />
              <GlobalStyles />
            </TaskProvider>
          </ProjectProvider>
        </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
