import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import history from '~/services/history';

import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';

export default function ActivityCreate() {
  const [task, setTask] = useState({});

  const task_id = window.location.href.slice(
    window.location.href.indexOf('create/') + 7
  );
  const user_id = useSelector(state => state.user.profile.id);

  const schema = Yup.object().shape({
    title: Yup.string()
      .min(6)
      .required('Digite um título para atividade!'),
    description: Yup.string()
      .min(6)
      .required('Digite uma descrição para atividade!'),
  });

  // LOAD TASK
  async function loadTask() {
    const response = await api.get(`task/${task_id}`);

    setTask(response.data);
  }

  // LOAD ALL INPUT DATA
  useEffect(() => {
    loadTask();
  }, []);

  // CREATE ACTIVITY
  async function handleSubmit({ title, description }) {
    try {
      await api.post('task/activity', {
        title,
        description,
        user_id,
        task_id,
      });
      toast.success('Atividade cadastrada com sucesso! :)');
      history.push(`/task/${task_id}`);
    } catch {
      toast.error('Falha ao cadastrar atividade, verique os dados! :(');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <MenuTop>
          <h1>Registrar atividade</h1>
          <MenuTopFunc>
            <Link className="btnVoltar" to={`/task/${task_id}`}>
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
            <h4>TAREFA: </h4>
            <p>{task.description}</p>
          </li>
          <li>
            <label>TÍTULO</label>
            <Input name="title" type="text" />
          </li>
          <li>
            <label>DESCRIÇÃO</label>
            <Input name="description" type="text" />
          </li>
        </ul>
      </Form>
    </Container>
  );
}
