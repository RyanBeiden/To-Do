import { Head } from '@inertiajs/react';
import React, { JSX } from 'react';
import Logo from '../components/logo';
import { IAuth } from '../types';

export default function Dashboard({ auth }: IAuth): JSX.Element {
  return (
    <>
      <Head title="Dashboard" />
      <div className='grid grid-rows-[max-content_1fr] h-screen'>
        <header className='flex justify-between m-4 items-start'>
          <Logo />
          <div>User Icon Here</div>
        </header>
        <div className='px-[15%] pt-[15%] pb-14'>
          <div className='flex justify-start items-center'>
            <h1 className='text-left mr-2'>To-Do</h1>
            <span className='bg-purple-300 rounded-full py-1 px-2 text-xs'>
              <strong>{auth && auth.role.name}</strong>
            </span>
          </div>
          <div className='separator my-6' />
        </div>
      </div>
    </>
  );
}
