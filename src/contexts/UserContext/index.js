import P from 'prop-types';
import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: '',
    email: '',
    password: '',
    online: false,
    token: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: P.node.isRequired,
};

export default UserProvider;
