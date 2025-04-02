import { Head, useForm } from '@inertiajs/react';
import React, { JSX } from 'react';
import Logo from '../components/logo';
import Input from '../components/input';

export default function Login(): JSX.Element {
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
          <Input
            type="email"
            label="Email"
            value={data.email}
            setValue={(value: string) => setData('email', value)}
            error={errors.email}
            clearErrors={() => clearErrors('email')}
          />
          <Input
            type="password"
            label="Password"
            value={data.password}
            setValue={(value: string) => setData('password', value)}
            error={errors.password}
            clearErrors={() => clearErrors('password')}
          />
          <button type="submit" className="py-2 w-full" disabled={processing}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
