import React from 'react';
import ass1 from '../assets/quiz23.jpg';

export const Main = () => {
  return (
    // <div className="w-screen h-screen overflow-hidden">
      <img
        src={ass1}
        alt="Quiz Banner"
        className="object-contain w-full h-full"
      />
    // </div>
  );
};
