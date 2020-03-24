import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Tasks from '~/pages/Tasks';
import TaskDetails from '~/pages/TaskDetails';
import TaskCreate from '~/pages/TaskCreate';
import DepartmentCreate from '~/pages/DepartmentCreate';
import TaskStatusCreate from '~/pages/TaskStatusCreate';
import TaskTypeCreate from '~/pages/TaskTypeCreate';
import ActivityCreate from '~/pages/ActivityCreate';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/tasks" component={Tasks} isPrivate />
      <Route path="/task/details" component={TaskDetails} isPrivate />
      <Route path="/task/create" component={TaskCreate} isPrivate />
      <Route
        path="/task/activity/create"
        component={ActivityCreate}
        isPrivate
      />

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
