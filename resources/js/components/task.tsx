import React, { JSX, useState } from 'react';
import { IAuth, ITask } from '../types';
import Checkbox from './checkbox';
import { router, useForm } from '@inertiajs/react';
import TaskAction from './task-action';

export default function Task({ ...task }: ITask): JSX.Element {
  const [editing, setEditing] = useState(false);

  const {
    data,
    setData,
    put,
    delete: destroy,
    errors,
    clearErrors,
  } = useForm({
    id: task.id,
    complete: task.complete,
    description: task.description,
  });

  // @TODO: Change this to `can` after adding Policies.
  // const { auth } = usePage().props;

  function completeTask(complete: boolean) {
    setData('complete', complete);

    // I was having trouble ensuring setData() completed before the PUT request,
    // so I went with a router PUT instead for now.
    router.put(route('update.task', task.id), { ...task, complete });
  }

  function editTask(event: React.FormEvent) {
    event.preventDefault();

    put(route('update.task', task.id), {
      onSuccess: () => setEditing(false),
    });
  }

  function cancel() {
    setData('description', task.description);

    setEditing(false);
  }

  function deleteTask() {
    destroy(route('delete.task', task.id));
  }

  return (
    <>
      {!editing && (
        <li
          className={
            data.complete
              ? 'w-full border bg-gray-50 border-gray rounded-lg h-14 flex justify-between items-center px-4 text-xs'
              : 'w-full border border-gray rounded-lg h-14 flex justify-between items-center px-4 text-xs'
          }
        >
          <div className="flex items-center">
            <Checkbox
              id={data.id}
              checked={data.complete}
              setValue={(value) => completeTask(value)}
            />
            <strong
              className={data.complete ? 'line-through text-gray-200' : ''}
            >
              {data.description}
            </strong>
          </div>
          <div className="flex gap-4">
            <img
              src="/edit.svg"
              className="w-4 h-4 cursor-pointer"
              onClick={() => setEditing(true)}
            />
            <img
              src="/delete.svg"
              className="w-4 h-4 cursor-pointer"
              onClick={() => deleteTask()}
            />
          </div>
        </li>
      )}
      {editing && (
        <TaskAction
          key={data.id}
          actionText="Edit"
          value={data.description}
          setValue={(value) => setData('description', value)}
          error={errors.description}
          clearErrors={() => clearErrors('description')}
          submit={(event: React.FormEvent) => editTask(event)}
          close={() => cancel()}
        />
      )}
    </>
  );
}
