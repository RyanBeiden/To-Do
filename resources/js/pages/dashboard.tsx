import { Head, useForm } from '@inertiajs/react';
import React, { JSX, useState } from 'react';
import Logo from '../components/logo';
import { IAuth, ITask } from '../types';
import Task from '../components/task';
import TaskAction from '../components/task-action';

interface DashboardProps {
  auth: IAuth;
  tasks: ITask[];
}

export default function Dashboard({
  auth,
  tasks,
}: DashboardProps): JSX.Element {
  const [addTask, setAddTask] = useState(false);
  const [accountOptions, setAccountOptions] = useState(false);

  const { canEdit, name: roleName } = auth.role;

  const { data, setData, reset, post, errors, clearErrors } = useForm({
    description: '',
  });

  const taskList = tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      description={task.description}
      complete={task.complete}
      canEdit={canEdit}
    />
  ));

  const roleBadge = roleName && (
    <span className="bg-purple-300 rounded-full py-1 px-2 text-xs">
      <strong>{roleName}</strong>
    </span>
  );

  const newTaskButton = canEdit ? (
    <button
      className="flex items-center py-1.5 px-2 mb-6 text-xs"
      onClick={() => setAddTask(true)}
    >
      <img src="/new.svg" className="mr-0.5 w-3 text-gray-200" /> New Task
    </button>
  ) : (
    <button className="flex items-center py-1.5 px-2 mb-6 text-xs disabled">
      <img src="/new-disabled.svg" className="mr-0.5 w-3" /> New Task
    </button>
  );

  function submit(event: React.FormEvent) {
    event.preventDefault();

    post(route('store.task'), {
      onSuccess: () => close(),
    });
  }

  function close() {
    reset('description');
    setAddTask(false);
  }

  function logout() {
    post(route('logout'));
  }

  return (
    <>
      <Head title="Dashboard" />
      <div className="grid grid-rows-[max-content_1fr] h-screen">
        <header className="flex justify-between p-4 items-start sticky top-0">
          <Logo />
          <div className="relative">
            <img
              src="/account.svg"
              className="w-8 h-8 cursor-pointer"
              onClick={() => setAccountOptions(!accountOptions)}
            />
            {accountOptions && (
              <div>
                <button
                  className="py-1.5 px-2 mt-2 text-xs absolute right-0"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </header>
        <div className="px-[15%] pt-[15%] pb-14">
          <div className="flex justify-start items-center">
            <h1 className="text-left mr-2">To-Do</h1>
            {roleBadge}
          </div>
          <div className="separator mt-3 mb-6" />
          {newTaskButton}
          <ul className="grid gap-2">
            {addTask && (
              <TaskAction
                key={0}
                actionText="Add"
                value={data.description}
                setValue={(value) => setData('description', value)}
                error={errors.description}
                clearErrors={() => clearErrors('description')}
                submit={(event: React.FormEvent) => submit(event)}
                close={() => close()}
              />
            )}
            {taskList}
          </ul>
        </div>
      </div>
    </>
  );
}
