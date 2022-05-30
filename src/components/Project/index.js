import React from 'react';
import List from '../List';
import P from 'prop-types';
import { AddTask, Container, Header, HeaderIcons } from './styles';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';

const toppings = [
  {
    name: 'Capsicum',
    status: true,
  },
  {
    name: 'Paneer',
    status: true,
  },
  {
    name: 'Red Paprika',
    status: true,
  },
  {
    name: 'Onions',
    status: true,
  },
  {
    name: 'Extra Cheese',
    status: false,
  },
  {
    name: 'Baby Corns',
    status: false,
  },
  {
    name: 'Mushroom',
    status: false,
  },
];

const Project = ({ project }) => {
  const handleSubmit = () => {
    console.log('Handle');
  };

  return (
    <Container>
      <Header>
        <h4>{project.name}</h4>
        <HeaderIcons>
          <BsFillPencilFill size={12} fill="#66d6dd" />
          <BsFillTrashFill size={12} fill="#66d6dd" />
        </HeaderIcons>
      </Header>
      <List todos={toppings} />
      <AddTask>
        <form onSubmit={handleSubmit}>
          <input name="email" placeholder="Task" />

          <button type="submit">Add</button>
        </form>
      </AddTask>
    </Container>
  );
};

export default Project;

Project.propTypes = {
  project: P.shape({
    name: P.string.isRequired,
    _id: P.number.isRequired,
  }),
};
