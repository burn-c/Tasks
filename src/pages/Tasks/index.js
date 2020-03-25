import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
// import { MdAdd, MdCheckBox, MdArrowBack, MdArrowForward } from 'react-icons/md';
// import { toast } from 'react-toastify';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { zonedTimeToUtc } from 'date-fns-tz';

import { Container, MenuTop, MenuTopFunc } from './styles';

import api from '~/services/api';
import history from '~/services/history';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  // LOAD TASKS
  useEffect(() => {
    async function loadTasks() {
      const response = await api.get('/task/id/all');

      const { data } = response;

      // FORMAT DATE
      const dateFormated = data.map(task => ({
        ...task,
        startDateFormated: format(
          zonedTimeToUtc(task.start_date, 'America/Sao_Paulo'),
          "d'/'MM'/'yy",
          {
            locale: pt,
          }
        ),
        endDateFormated: format(
          zonedTimeToUtc(task.end_date, 'America/Sao_Paulo'),
          "d'/'MM'/'yy",
          {
            locale: pt,
          }
        ),
      }));

      setTasks(dateFormated);
    }

    loadTasks();
  });

  function handleCancel() {}

  function handleEdit(id) {
    history.push(`/task/details/${id}`);
  }

  return (
    <Container>
      <MenuTop>
        <h1>Tarefas</h1>
        <MenuTopFunc>
          <Link className="btnCadastrar" to="/task/create">
            <MdAdd size="25" color="#FFF" />
            CADASTRAR
          </Link>
        </MenuTopFunc>
      </MenuTop>

      <table>
        <thead>
          <tr>
            <th className="ccabecalhoCenter">DESCRIÇÃO</th>
            <th className="cabecalhoCenter">RESPONSÁVEL</th>
            <th className="cabecalhoCenter">TIPO</th>
            <th className="cabecalhoCenter">STATUS</th>
            <th className="cabecalhoCenter">DT. INÍCIO</th>
            <th className="cabecalhoCenter">DT. PREV. FINAL</th>
            <th className="cabecalhoCenter">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="trCenter">
              <td>{task.description}</td>
              <td className="tdCenter">{task.user.name}</td>
              <td className="tdCenter">{task.task_type.name}</td>
              <td className="tdCenter">{task.task_status.name}</td>
              <td className="tdCenter">{task.startDateFormated}</td>
              <td className="tdCenter">{task.endDateFormated}</td>
              <td className="tdCenter">
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(task.id)}
                >
                  + detalhes
                </button>
                <button
                  className="btnCancelar"
                  type="button"
                  onClick={() => handleCancel(task.id)}
                >
                  cancelar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
