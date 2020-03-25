import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import { Container, MenuTop, MenuTopFunc } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Users() {
  const [users, setUsers] = useState([]);

  // LOAD USERS
  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await api.get('/users');

        const { data } = response;

        setUsers(data);
      } catch {
        toast.error('Falha ao carregar usuários! :(');
      }
    }

    loadTasks();
  }, []);

  function handleCancel() {}

  function handleEdit(id) {
    history.push(`/user/details/${id}`);
  }

  return (
    <Container>
      <MenuTop>
        <h1>Usuários</h1>
        <MenuTopFunc>
          <Link className="btnCadastrar" to="/user/create">
            <MdAdd size="25" color="#FFF" />
            CADASTRAR
          </Link>
        </MenuTopFunc>
      </MenuTop>

      <table>
        <thead>
          <tr>
            <th className="ccabecalhoCenter">NOME</th>
            <th className="cabecalhoCenter">E-MAIL</th>
            <th className="cabecalhoCenter">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} className="trCenter">
              <td>{user.name}</td>
              <td className="tdCenter">{user.email}</td>
              <td className="tdCenter">
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(user.id)}
                >
                  atualizar
                </button>
                <button
                  className="btnCancelar"
                  type="button"
                  onClick={() => handleCancel(user.id)}
                >
                  deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
