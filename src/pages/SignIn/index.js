import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext/UserContext';
import api from '../../services/api';
import * as Styled from './styles';

const SignIn = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await api.post(
      `users/login`,
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
      setUser((prev) => ({
        ...prev,
        token: data.token,
        online: true,
        id: data.id,
      }));
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
        {/* <img src={logo} alt="Bolttech TODO List" /> */}
        <h1>Bolttech TODO List</h1>

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
          <Link to="/register">Crate an account</Link>
        </form>
      </Styled.Content>
    </Styled.Container>
  );
};

export default SignIn;
