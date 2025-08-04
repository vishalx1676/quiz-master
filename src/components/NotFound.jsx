import React from "react";
import Footer from './Footer';
import NotFoundImage from '../assets/404.png'; // Replace with your actual image path

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow px-4 text-center">
       <img
  src={NotFoundImage}
  alt="404 Not Found"
  className="w-[300px] h-auto md:w-[400px] lg:w-[500px]  object-contain mb-6 shadow-md rounded-lg"
/>
        <h1 className="mb-2 text-2xl font-bold md:text-3xl">404 - Page Not Found</h1>
        <p className="text-base text-gray-600 md:text-lg">
          The page you are looking for does not exist.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
