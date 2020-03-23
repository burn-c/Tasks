import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
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
          <Link to="/tasks">TAREFAS</Link>
          <Link to="/users">USUÁRIOS</Link>
          <Link to="/department/create">DEPARTAMENTOS</Link>
          <Link to="/task/status/create">TAREFA STATUS</Link>
          <Link to="/task/type/create">TAREFA TIPO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
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
