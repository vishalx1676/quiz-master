import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <>
      <div className="px-6 py-4 font-bold text-white bg-gray-900">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo & Nav Links */}
          <div className="flex items-center justify-between">
            <h3 className="text-3xl">Quiz Master</h3>
            <div
              className="text-3xl cursor-pointer md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </div>
          </div>

          <ul className="hidden gap-10 mt-4 md:flex md:mt-0">
            <Link to="/home">HOME</Link>
            <Link to="/allquiz">QUIZ</Link>
            <Link to="/contactus">CONTACT</Link>
          </ul>

          {/* User Info & Logout */}
          {user && (
            <div className="mt-4 text-sm text-gray-300 md:mt-0 md:text-right">
              <p className="text-base font-semibold text-white">
                {user.displayName}
              </p>
              <p className="text-xs text-gray-400">{user.email}</p>
              <button
                onClick={handleLogout}
                className="px-3 py-1 mt-1 text-sm font-semibold text-white bg-red-600 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col gap-4 mt-4 md:hidden">
            <Link to="/home">HOME</Link>
            <Link to="/allquiz">QUIZ</Link>
            <Link to="/contactus">CONTACT</Link>
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
