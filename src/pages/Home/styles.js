import styled from 'styled-components';

export const Container = styled.div`
display: flex;
`;

export const Projects = styled.div`
  display: flex;
  /* flex-grow: 2; */
  flex-wrap: wrap;
  width: 80%;
`;

export const Add = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 20%;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

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
    background: #3b9eff;
    font-weight: bold;
    color: #FFF;
    border: 0;
    border-radius: 4px;
    font-size: 1.8rem;;
    transition: background 0.2s;

    &:hover {
       background: #5454a0;
    }
  }
`;
