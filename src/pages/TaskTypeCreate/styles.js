import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  align-self: center;
  margin-right: auto;
  margin-left: auto;
  align-items: center;

  h1 {
    font-weight: normal;
  }

  ul {
    background: rgba(255, 255, 255, 0.3);
    width: 700px;
    align-self: center;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    padding: 20px;
    li {
      margin: 10px 0 10px 0;
      display: flex;
      flex-direction: column;
    }

    /* Field validation error message */
    li span {
      color: #cd3333;
      font-size: 12px;
      margin: 10px 0 0 5px;
    }
  }
  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin-bottom: 5px;
  }
  input {
    background: rgba(255, 255, 255, 0.7);
    border: 0;
    border-radius: 4px;
    height: 40px;
    padding: 0 15px;
    color: #000;
    font-size: 16px;
    &::placeholder {
      color: rgba(0, 0, 0, 1);
    }
  }

  li input {
    width: 100%;
  }
`;

export const MenuTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;

  a {
    border: 0;
    padding: 2px;
    border-radius: 4px;
    width: 110px;
    height: 40px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    align-content: center;
    margin-left: 10px;
    justify-content: center;
  }

  button {
    border: 0;
    padding: 2px;
    border-radius: 4px;
    width: 110px;
    height: 40px;
    background: radial-gradient(
      circle,
      rgba(19, 201, 134, 1) 0%,
      rgba(0, 255, 169, 1) 150%
    );
    color: #eee;
    font-weight: bold;
    font-size: 16px;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    align-content: center;
    margin-left: 10px;
    justify-content: center;
  }
  .btnVoltar {
    background-color: #d3d3d3;
  }
`;
export const MenuTopFunc = styled.div`
  display: flex;
`;
