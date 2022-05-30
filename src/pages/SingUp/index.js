import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext/UserContext';
import api from '../../services/api';
import * as Styled from './styles';

const SignUp = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post(
      `users`,
      {
        ...user,
      },
      {
        headers: {
          'x-api-key': 'bolttech',
        },
      },
    );

    if (data) {
      navigate('/home');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { email, password } = user;

  return (
    <Styled.Container>
      <Styled.Content>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />

          <button type="submit">Login</button>
          <Link to="/">Already register</Link>
        </form>
      </Styled.Content>
    </Styled.Container>
  );
};

export default SignUp;
