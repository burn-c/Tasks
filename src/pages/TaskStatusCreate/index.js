import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import { MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container, MenuTop, MenuTopFunc } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome do status é obrigatório!'),
});

export default function TaskStatusCreate() {
  const [taskStatus, setTaskStatus] = useState([]);
  const [taskName, setTaskName] = useState('');

  // LOAD TASK STATUS FROM API
  useEffect(() => {
    async function loadTaskStatus() {
      try {
        const response = await api.get('/task/status');

        const { data } = response;

        setTaskStatus(data);
      } catch {
        toast.error('Falha ao carregar status de tarefas! :(');
      }
    }

    loadTaskStatus();
  }, []);

  function handleDelete() {}

  function handleEdit() {
    // LOAD DATA ON INPUT
  }

  async function handleSubmit(name) {
    try {
      await api.post('task/status', name);

      toast.success('Status cadastrado com sucesso! :)');

      setTaskName('');
    } catch {
      toast.error('Erro ao cadastrar status! :(');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <MenuTop>
          <h1>Status da tarefa</h1>
          <MenuTopFunc>
            <button type="submit">
              <MdCheck size="25" />
              SALVAR
            </button>
          </MenuTopFunc>
        </MenuTop>
        <ul>
          <li>
            <label htmlFor="name">CADASTRAR STATUS</label>
            <Input
              name="name"
              type="text"
              placeholder="Digite o nome do status"
              value={taskName}
              onChange={e => setTaskName(e.target.value)}
            />
          </li>
        </ul>
      </Form>

      <table>
        <thead>
          <tr>
            <th className="ccabecalhoCenter">NOME</th>
            <th className="cabecalhoCenter">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {taskStatus.map(task => (
            <tr key={task.id} className="trCenter">
              <td>{task.name}</td>
              <td className="tdCenter">
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(task.id)}
                >
                  atualizar
                </button>
                <button
                  className="btnCancelar"
                  type="button"
                  onClick={() => handleDelete(task.id)}
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
