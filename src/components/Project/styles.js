import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 10px;
  border: 2px solid #5d5784;
  border-radius: 4px;
  padding: 0 15px 0 15px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderIcons = styled.div`
display: flex;
width: 20%;
justify-content: space-evenly;
`;

export const AddTask = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    margin-top: 30px;
    align-items: baseline;

    input {
      background: rgba(0,0,0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #FFF;
      margin: 0 0 10px;
      font-size: 1.6rem;

      &::placeholder {
        color: rgba(255,255,255, 0.7);
      }
    }
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    background: #2daf31;
    font-weight: bold;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    font-size: 1.8rem;;
    transition: background 0.2s;
    font-size: 1.4rem;
    padding: 10px;

    &:hover {
       background: #5454a0;
    }
  }

`;
