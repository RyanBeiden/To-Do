import React, { JSX } from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  setValue: (key: string) => void;
  error: string | undefined;
  clearErrors: () => void;
}

export default function Input({
  type,
  placeholder = '',
  value,
  setValue,
  error = '',
  clearErrors = () => {},
}: InputProps): JSX.Element {
  return (
    <>
      <input
        id={type}
        type={type === 'password' ? type : 'text'}
        placeholder={placeholder}
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
    </>
  );
}
