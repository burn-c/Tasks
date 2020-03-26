import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';
import { MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { Container, MenuTop, MenuTopFunc } from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .required('O nome do tipo é obrigatório!'),
});

export default function TaskTypeCreate() {
  const [taskTypes, setTaskTypes] = useState([]);
  const [taskTypeName, setTaskTypeName] = useState('');

  // LOAD TASK TYPE FROM API
  useEffect(() => {
    async function loadTaskTypes() {
      try {
        const response = await api.get('/task/type');

        const { data } = response;

        setTaskTypes(data);
      } catch {
        toast.error('Falha ao carregar tipos de tarefa! :(');
      }
    }

    loadTaskTypes();
  }, []);

  function handleDelete() {}

  function handleEdit() {
    // LOAD DATA ON INPUT
  }

  async function handleSubmit(name) {
    try {
      await api.post('/task/type', name);

      toast.success('Tipo cadastrado com sucesso! :)');

      setTaskTypeName('');
    } catch (err) {
      toast.error(`${err.data}Erro ao cadastrar tipo! :(`);
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <MenuTop>
          <h1>Tipo de tarefa</h1>
          <MenuTopFunc>
            <button type="submit">
              <MdCheck size="25" />
              SALVAR
            </button>
          </MenuTopFunc>
        </MenuTop>
        <ul>
          <li>
            <label htmlFor="name">CADASTRAR TIPO</label>
            <Input
              name="name"
              type="text"
              placeholder="Digite o nome do status"
              value={taskTypeName}
              onChange={e => setTaskTypeName(e.target.value)}
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
          {taskTypes.map(task => (
            <tr key={task.id} className="trCenter">
              <td>{task.name}</td>
              <td className="tdCenter">
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(task.id)}
                >
                  editar
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
