import '../css/app.css';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'todoList';

createInertiaApp({
  title: (title) => `${title} | ${appName}`,
  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });

    return pages[`./pages/${name}.tsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
  progress: {
    color: '#7c00ff',
  },
});
