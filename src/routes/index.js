import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Tasks from '~/pages/Tasks';
import DepartmentCreate from '~/pages/DepartmentCreate';
import TaskStatusCreate from '~/pages/TaskStatusCreate';
import TaskTypeCreate from '~/pages/TaskTypeCreate';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/tasks" component={Tasks} isPrivate />
      <Route path="/department/create" component={DepartmentCreate} isPrivate />
      <Route
        path="/task/status/create"
        component={TaskStatusCreate}
        isPrivate
      />
      <Route path="/task/type/create" component={TaskTypeCreate} isPrivate />
    </Switch>
  );
}
