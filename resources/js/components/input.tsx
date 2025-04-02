import React, { JSX } from 'react';
import { IFormInput } from '../types';

export default function Input({
  type,
  label,
  value,
  setValue,
  error,
  clearErrors,
}: IFormInput): JSX.Element {
  return (
    <div className="mb-6 relative">
      <label htmlFor={type}>{label}</label>
      <input
        id={type}
        type={type === 'password' ? type : 'text'}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onFocus={clearErrors}
        className={
          error ? 'w-full p-2 border-red-500' : 'w-full p-2 border-gray'
        }
      />
      {error && (
        <div className="absolute text-xs pt-0.5 text-red-500">{error}</div>
      )}
    </div>
  );
}
