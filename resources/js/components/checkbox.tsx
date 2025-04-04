import React, { JSX } from 'react';
import { ICheckbox } from '../types';

export default function Checkbox({
  id,
  checked,
  setValue,
}: ICheckbox): JSX.Element {
  const taskId = `task-checkbox-${id}`;

  return (
    <label
      htmlFor={taskId}
      className="flex items-center cursor-pointer relative mr-4"
    >
      <input
        id={taskId}
        type="checkbox"
        checked={checked}
        onChange={(event) => setValue(event.target.checked)}
        className="w-6 h-6 peer task cursor-pointer transition-all appearance-none hover:shadow-md border border-gray checked:bg-purple checked:border-purple"
      />
      <img
        src="/check.svg"
        className="absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />
    </label>
  );
}
