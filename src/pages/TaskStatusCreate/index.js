import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';
import history from '~/services/history';
import api from '~/services/api';

import { Container, MenuTop, MenuTopFunc } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome do status é obrigatório!'),
});

export default function TaskStatusCreate() {
  async function handleSubmit(name) {
    try {
      await api.post('task/status', name);

      history.push('/task/status');
      toast.success('Status cadastrado com sucesso! :)');
    } catch {
      toast.error('Erro ao cadastrar status! :(');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <MenuTop>
          <h1>Cadastro de status da tarefa</h1>
          <MenuTopFunc>
            <Link className="btnVoltar" to="/departments">
              <MdArrowBack size="25" />
              VOLTAR
            </Link>
            <button type="submit">
              <MdCheck size="25" />
              SALVAR
            </button>
          </MenuTopFunc>
        </MenuTop>
        <ul>
          <li>
            <label htmlFor="name">NOME DO STATUS</label>
            <Input
              name="name"
              type="text"
              placeholder="Digite o nome do status"
            />
          </li>
        </ul>
      </Form>
    </Container>
  );
}
