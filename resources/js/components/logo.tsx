import React from 'react';

export default function Logo() {
  return (
    <div className="flex justify-center items-center mb-5">
      <img alt="Logo" src="/logo.svg" />
      <img alt="StoryBrand.ai" src="/logo-name.svg" className="ml-2 mt-0.5" />
    </div>
  );
}
