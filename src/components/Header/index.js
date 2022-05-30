import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext/UserContext';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleOnLogout = () => {
    setUser({
      email: '',
      password: '',
    });
    navigate('/');
  };

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/home">EDirectinsure Todo List</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{user.email}</strong>
              <Link to="/" onClick={handleOnLogout}>
                Logout
              </Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/55/abott@adorable.png"
              alt="Marcos"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
