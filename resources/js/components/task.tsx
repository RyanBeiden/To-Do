import React, { JSX } from 'react';
import { ITask } from '../types';

export default function Task({ ...props }: ITask): JSX.Element {
  return (
    <li className="w-full border border-gray rounded-lg h-14 flex items-center pl-4">
      {props.description}
    </li>
  );
}
