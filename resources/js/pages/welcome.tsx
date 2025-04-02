import { Head } from '@inertiajs/react';
import React, { useState } from 'react';
import Logo from '../components/logo';

export default function Welcome() {
  const [values, setValues] = useState({ // @TODO: Add a type
    email: '',
    password: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = event.target;

    setValues(values => ({
      ...values,
      [id]: value,
    }));
  };

  return (
    <>
      <Head title="Sign In" />
      <div className='flex justify-center items-center h-screen'>
        <form className='p-10 border border-gray rounded-lg'>
          <Logo />
          <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className='w-full p-2'
              type='email'
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className='w-full p-2'
              type="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className='py-2 w-full'
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
