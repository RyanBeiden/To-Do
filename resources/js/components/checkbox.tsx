import React, { JSX } from 'react';

interface CheckboxProps {
  id: number;
  checked: boolean;
  setValue: (value: boolean) => void;
  canUpdate: boolean;
}

export default function Checkbox({
  id,
  checked,
  setValue,
  canUpdate,
}: CheckboxProps): JSX.Element {
  const taskId = `task-checkbox-${id}`;

  return (
    <label htmlFor={taskId} className="flex items-center relative mr-4">
      <input
        id={taskId}
        type="checkbox"
        checked={checked}
        onChange={(event) => canUpdate && setValue(event.target.checked)}
        className={
          canUpdate
            ? 'w-6 h-6 peer task cursor-pointer transition-all appearance-none hover:shadow-md border border-gray checked:bg-purple checked:border-purple'
            : 'w-6 h-6 peer task cursor-default transition-all appearance-none border border-gray checked:bg-purple checked:border-purple'
        }
      />
      <img
        src="/check.svg"
        className="absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
    </label>
  );
}
