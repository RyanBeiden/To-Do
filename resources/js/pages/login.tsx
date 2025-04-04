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

    post(route('authenticate'));
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
            <Input
              type="email"
              value={data.email}
              setValue={(value: string) => setData('email', value)}
              error={errors.email}
              clearErrors={() => clearErrors('email')}
            />
          </div>
          <div className="mb-8 relative">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              value={data.password}
              setValue={(value: string) => setData('password', value)}
              error={errors.password}
              clearErrors={() => clearErrors('password')}
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
