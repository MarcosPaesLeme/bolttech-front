import P from 'prop-types';
import React, { useState } from 'react';
import { Container } from './styles';
import { BsFillTrashFill, BsFillInfoCircleFill } from 'react-icons/bs';

const List = ({ todos }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(todos.length).fill(false),
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <Container>
      <ul className="toppings-list">
        {todos.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  <BsFillTrashFill size={10} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default List;

List.propTypes = {
  todos: P.arrayOf(
    P.shape({
      name: P.string.isRequired,
      status: P.number.isRequired,
    }),
  ).isRequired,
};
