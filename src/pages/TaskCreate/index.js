import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { Form, Input, Select } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import * as Yup from 'yup';
import history from '~/services/history';

import { Container, MenuTop, MenuTopFunc } from './styles';
import api from '~/services/api';

export default function TaskCreate() {
  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [taskTypes, setTaskTypes] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);

  const schema = Yup.object().shape({
    description: Yup.string()
      .min(6)
      .required('Digite uma descrição!'),
    user_id: Yup.number()
      .required()
      .typeError('Selecione um usuário!'),
    department_id: Yup.number()
      .required()
      .typeError('Selecione um departamento!'),
    task_type_id: Yup.number()
      .required()
      .typeError('Selecione o tipo da tarefa!'),
    task_status_id: Yup.number()
      .required()
      .typeError('Selecione o status da tarefa!'),
    start_date: Yup.date()
      .required()
      .typeError('Selecione uma data!'),
    end_date: Yup.date()
      .required()
      .typeError('Selecione uma data!'),
  });

  // LOAD USERS
  async function loadUsers() {
    const response = await api.get('users');
    const { data } = response;
    const options = data.map(item => ({
      id: item.id,
      title: item.name,
    }));
    setUsers(options);
  }

  // LOAD DEPARTMENTS
  async function loadDepartments() {
    const response = await api.get('department');
    const { data } = response;
    const options = data.map(item => ({
      id: item.id,
      title: item.name,
    }));
    setDepartments(options);
  }

  // LOAD TASK TYPES
  async function loadTaskTypes() {
    const response = await api.get('task/type');
    const { data } = response;
    const options = data.map(item => ({
      id: item.id,
      title: item.name,
    }));
    setTaskTypes(options);
  }

  // LOAD TASK STATUS
  async function loadTaskStatuss() {
    const response = await api.get('task/status');
    const { data } = response;
    const options = data.map(item => ({
      id: item.id,
      title: item.name,
    }));
    setTaskStatus(options);
  }

  // LOAD ALL INPUT DATA
  useEffect(() => {
    loadUsers();
    loadDepartments();
    loadTaskTypes();
    loadTaskStatuss();
  }, []);

  // CREATE TASK
  async function handleSubmit({
    description,
    user_id,
    department_id,
    task_type_id,
    task_status_id,
    start_date,
    end_date,
  }) {
    try {
      await api.post('task', {
        description,
        user_id,
        department_id,
        task_type_id,
        task_status_id,
        start_date,
        end_date,
      });
      toast.success('Tarefa cadastrada com sucesso! :)');
      history.push('tasks');
    } catch {
      toast.error('Falha ao cadastrar tarefa, verique os dados! :(');
    }
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <MenuTop>
          <h1>Cadastro de tarefa</h1>
          <MenuTopFunc>
            <Link className="btnVoltar" to="/tasks  ">
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
            <label>DESCRIÇÃO</label>
            <Input name="description" type="text" />
          </li>
          <li>
            <label>RESPONSÁVEL</label>
            <Select className="selectUser" name="user_id" options={users} />
          </li>
          <li>
            <label>DEPARTAMENTO</label>
            <Select
              className="selectDepartment"
              name="department_id"
              options={departments}
            />
          </li>
          <li>
            <label>TIPO</label>
            <Select
              className="selectType"
              name="task_type_id"
              options={taskTypes}
            />
          </li>
          <li>
            <label>STATUS</label>
            <Select
              className="selectStatus"
              name="task_status_id"
              options={taskStatus}
            />
          </li>
          <div className="divDates">
            <li>
              <label>DATA DE INÍCIO</label>
              <Input name="start_date" type="date" />
            </li>

            <li>
              <label>DATA FINAL PREVISTA</label>
              <Input name="end_date" type="date" />
            </li>
          </div>
        </ul>
      </Form>
    </Container>
  );
}
