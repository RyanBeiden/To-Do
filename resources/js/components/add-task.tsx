import { useForm } from '@inertiajs/react';
import Input from './input';
import React, { JSX } from 'react';

export default function AddTask({ close }: { close: () => void }): JSX.Element {
  const { data, setData, post, errors, clearErrors } = useForm({
    description: '',
  });

  function submit(event: React.FormEvent) {
    event.preventDefault();

    post('/task', {
      onSuccess: () => close(),
    });
  }

  function cancel(event: React.FormEvent) {
    event.preventDefault();

    close();
  }

  return (
    <form className="add-task h-14 relative">
      <Input
        type="task"
        placeholder="New Task"
        value={data.description}
        setValue={(value: string) => setData('description', value)}
        error={errors.description}
        clearErrors={() => clearErrors('description')}
      />
      <div className="absolute -right-0 mr-4 top-[25%]">
        <button
          type="submit"
          className="py-1.5 px-2 text-xs mr-2"
          onClick={submit}
        >
          Add
        </button>
        <button className="py-[5px] px-2 text-xs secondary" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
