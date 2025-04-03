import { Head } from '@inertiajs/react';
import React, { JSX, useState } from 'react';
import Logo from '../components/logo';
import { IAuth, ITask } from '../types';
import AddTask from '../components/add-task';
import Task from '../components/task';

interface DashboardProps {
  auth: IAuth;
  tasks: ITask[];
}

export default function Dashboard({
  auth,
  tasks,
}: DashboardProps): JSX.Element {
  const [addTask, setAddTask] = useState(false);

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
        <header className="flex justify-between m-4 items-start">
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
            {addTask && <AddTask key={0} close={() => setAddTask(false)} />}
            {taskList}
          </ul>
        </div>
      </div>
    </>
  );
}
