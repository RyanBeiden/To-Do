import { Head, useForm } from '@inertiajs/react';
import React from 'react';
import Logo from '../components/logo';

export default function Login() {
  const { data, setData, post, processing, errors, clearErrors } = useForm({
    email: '',
    password: '',
  });

  function submit(event: React.FormEvent) {
    event.preventDefault();

    post('/login');
  }

  return (
    <>
      <Head title="Login" />
      <div className="flex justify-center items-center h-screen">
        <form
          className="p-10 border border-gray rounded-lg w-sm"
          onSubmit={submit}
        >
          <Logo />
          <div className="mb-6 relative">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className={
                errors.email
                  ? 'w-full p-2 border-red-500'
                  : 'w-full p-2 border-gray'
              }
              type="text"
              value={data.email}
              onChange={(event) => setData('email', event.target.value)}
              onFocus={() => clearErrors('email')}
            />
            {errors.email && (
              <div className="absolute text-xs pt-0.5 text-red-500">
                {errors.email}
              </div>
            )}
          </div>
          <div className="mb-8 relative">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className={
                errors.password
                  ? 'w-full p-2 border-red-500'
                  : 'w-full p-2 border-gray'
              }
              type="password"
              value={data.password}
              onChange={(event) => setData('password', event.target.value)}
              onFocus={() => clearErrors('password')}
            />
            {errors.password && (
              <div className="absolute text-xs pt-0.5 text-red-500">
                {errors.password}
              </div>
            )}
          </div>
          <button type="submit" className="py-2 w-full" disabled={processing}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
