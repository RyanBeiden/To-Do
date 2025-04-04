import Input from './input';
import React, { JSX } from 'react';

interface TaskActionProps {
  close: () => void;
  submit: (event: React.FormEvent) => void;
  setValue: (value: string) => void;
  clearErrors: () => void;
  value: string;
  actionText: string;
  error?: string;
}

export default function TaskAction({
  close,
  submit,
  setValue,
  clearErrors,
  value,
  actionText,
  error,
}: TaskActionProps): JSX.Element {
  function cancel(event: React.FormEvent) {
    event.preventDefault();

    close();
  }

  return (
    <form className="task-action h-14 relative">
      <Input
        type="task"
        placeholder={`${actionText} Task`}
        value={value}
        setValue={(value: string) => setValue(value)}
        error={error}
        clearErrors={clearErrors}
      />
      <div className="absolute -right-0 mr-4 top-[25%]">
        <button
          type="submit"
          className="py-1.5 px-2 text-xs mr-2"
          onClick={submit}
        >
          {actionText}
        </button>
        <button className="py-[5px] px-2 text-xs secondary" onClick={cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
