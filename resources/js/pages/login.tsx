import { Head, useForm } from '@inertiajs/react';
import React from 'react';
import Logo from '../components/logo';

export default function Login() {
  const { data, setData, post, processing } = useForm({
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
        <form className="p-10 border border-gray rounded-lg" onSubmit={submit}>
          <Logo />
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="w-full p-2"
              type="email"
              value={data.email}
              onChange={(event) => setData('email', event.target.value)}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="w-full p-2"
              type="password"
              value={data.password}
              onChange={(event) => setData('password', event.target.value)}
            />
          </div>
          <button type="submit" className="py-2 w-full" disabled={processing}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
