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
// import history from '~/services/history';

export default function TaskDetails() {
  const [activities, setActivities] = useState([]);

  // LOAD ACTIVITIES
  useEffect(() => {
    async function loadActivities() {
      const task_id = window.location.href.slice(
        window.location.href.indexOf('details/') + 8
      );
      const response = await api.get(`/task/activity/${task_id}`);

      const { data } = response;

      // FORMAT DATE
      const dateFormated = data.map(activity => ({
        ...activity,
        updatedDateFormated: format(
          zonedTimeToUtc(activity.updated_at, 'America/Sao_Paulo'),
          "d'/'MM'/'yy",
          {
            locale: pt,
          }
        ),
      }));

      setActivities(dateFormated);
    }

    loadActivities();
  }, []);

  function handleCancel() {}

  function handleEdit() {}

  return (
    <Container>
      <MenuTop>
        <h1>Atividades</h1>
        <MenuTopFunc>
          <Link className="btnCadastrar" to="/task/activity/create">
            <MdAdd size="25" color="#FFF" />
            CADASTRAR
          </Link>
        </MenuTopFunc>
      </MenuTop>

      <table>
        <thead>
          <tr>
            <th className="cabecalhoCenter">RESPONSÁVEL</th>
            <th className="cabecalhoCenter">TÍTULO</th>
            <th className="cabecalhoCenter">DESCRIÇÃO</th>
            <th className="cabecalhoCenter">ÚLTIMA ATUALIZAÇÃO</th>
            <th className="cabecalhoCenter">AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity.id} className="trCenter">
              <td className="tdCenter">{activity.user.name}</td>
              <td className="tdCenter">{activity.title}</td>
              <td className="tdCenter">{activity.description}</td>
              <td className="tdCenter">{activity.updatedDateFormated}</td>

              <td className="tdCenter">
                <button
                  className="btnEditar"
                  type="button"
                  onClick={() => handleEdit(activity.id)}
                >
                  + detalhes
                </button>
                <button
                  className="btnCancelar"
                  type="button"
                  onClick={() => handleCancel(activity.id)}
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
