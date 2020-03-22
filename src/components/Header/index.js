import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Tasks" />
          <Link to="/dashboard">DASHBOARD</Link>
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Carlos Oliveira</strong>
              <Link to="/profile">Meu perfil</Link>
              <button type="button" onClick={handleSignOut}>
                sair
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
