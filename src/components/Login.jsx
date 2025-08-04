
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const [email,setEmail]=useState('');
        const [password,setPassword]=useState('')
        const navigate=useNavigate();

        const handleSubmit=async(e)=>{
            e.preventDefault();
            try{
                const user=await signInWithEmailAndPassword(
                    auth,email,password
                )
                navigate('/home')
           
            }catch(error){
                console.log(error)
            }
        }


  const googleClick=async()=>{
    try{
        const provider=new GoogleAuthProvider();
        const result=await signInWithPopup(auth,provider)
        navigate('/home')

    }
    catch(e){

    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-xl w-96">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"  value={email} onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password" value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-2 text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        <button
          onClick={googleClick}
          className="flex items-center justify-center w-full py-2 mt-4 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <FcGoogle className="mr-2 text-xl" /> Sign in with Google
        </button>

        <p className="mt-4 text-sm text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;