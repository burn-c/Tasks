import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 2px 30px;
`;

export const Content = styled.div`
  height: 60px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 2px solid rgba(0, 0, 0, 0.2);
      height: 50px;
    }

    a {
      font-weight: bold;
      color: rgba(255, 255, 255, 0.7);
      margin-left: 10px;
      transition: background 0.5s;
    &:hover {
      color: ${lighten(1, '#FFF')};
    }
  }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  height: 60px;
  margin-left: 20px;
  padding-left: 20px;
  align-items: center;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #eee;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.8);
    }

    button {
      margin-top: 2px;
      font-size: 12px;
      color: rgba(0, 0, 0);
      font-weight: bold;
      background: none;
      border: 0;
    }
  }
`;
