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

  const { data, setData, post, errors, clearErrors } = useForm({
    description: '',
  });

  function submit(event: React.FormEvent) {
    event.preventDefault();

    post(route('store.task'), {
      onSuccess: () => setAddTask(false),
    });
  }

  const taskList = tasks.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      description={task.description}
      complete={task.complete}
    />
  ));

  const roleBadge = auth.role && (
    <span className="bg-purple-300 rounded-full py-1 px-2 text-xs">
      <strong>{auth.role.name}</strong>
    </span>
  );

  return (
    <>
      <Head title="Dashboard" />
      <div className="grid grid-rows-[max-content_1fr] h-screen">
        <header className="flex justify-between p-4 items-start sticky top-0">
          <Logo />
          <div>User Icon Here</div>
        </header>
        <div className="px-[15%] pt-[15%] pb-14">
          <div className="flex justify-start items-center">
            <h1 className="text-left mr-2">To-Do</h1>
            {roleBadge}
          </div>
          <div className="separator mt-3 mb-6" />
          <button
            className="flex items-center py-1.5 px-2 mb-6 text-xs"
            onClick={() => setAddTask(true)}
          >
            <img src="/new.svg" className="mr-0.5 w-3" /> New Task
          </button>
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
                close={() => setAddTask(false)}
              />
            )}
            {taskList}
          </ul>
        </div>
      </div>
    </>
  );
}
