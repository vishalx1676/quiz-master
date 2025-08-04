import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='grid grid-cols-2 px-6 py-10 text-white bg-gray-900 md:grid-cols-4 gap-x-10 md:gap-6 gap-y-10'>
      <div>
        <h2 className='mb-2 text-2xl font-bold'>QuizMaster</h2>
        <p className='text-sm text-gray-300'>Test Your Knowledge , Expand Your Mind.</p>
      </div>

      <div>
        <h3 className='mb-2 text-xl font-semibold'>Quick Links</h3>
        <ul>
          <li className="text-sm text-gray-300 cursor-pointer hover:text-white">
            <Link to="/home">Home</Link>
          </li>
          <li className="text-sm text-gray-300 cursor-pointer hover:text-white">
            <Link to="/allquiz">Quiz</Link>
          </li>
          <li className="text-sm text-gray-300 cursor-pointer hover:text-white">
            <Link to="/contactus">Contact</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mb-2 text-xl font-semibold'>Legal</h3>
        <ul>
          <li className='text-sm text-gray-300 cursor-pointer hover:text-white'>
            <Link to="/terms">Terms of Service</Link>
          </li>
          <li className='text-sm text-gray-300 cursor-pointer hover:text-white'>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='mb-2 text-xl font-semibold'>Contact Us</h3>
        <p className='text-sm text-gray-300'>New Mall Road 123, Asr</p>
        <p className='text-sm text-gray-300'>vishal501676@gmail.com</p>
        <p className='text-sm text-gray-300'>+91 8427578153</p>
      </div>
    </div>
  )
}

export default Footer
