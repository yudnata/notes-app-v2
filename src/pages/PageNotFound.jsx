import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

const PageNotFound = () => {
  const { theme } = useContext(ThemeContext);

  const baseBg = theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-gray-100';
  const textSub = theme === 'light' ? 'text-gray-600' : 'text-gray-400';
  const buttonBase =
    'mt-6 px-5 py-2.5 font-semibold rounded-lg transition-all duration-300 hover:scale-105';

  const buttonColor =
    theme === 'light'
      ? 'bg-orange-500 text-white hover:bg-orange-600'
      : 'bg-orange-600 text-white hover:bg-orange-500';

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${baseBg}`}
    >
      <h1 className="mb-3 font-extrabold text-orange-500 text-7xl drop-shadow-sm">404</h1>
      <p className={`text-xl sm:text-2xl font-medium ${textSub}`}>
        {theme === 'light' ? 'Halaman tidak ditemukan' : 'Halaman tidak ditemukan'}
      </p>
      <Link
        to="/"
        className={`${buttonBase} ${buttonColor}`}
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default PageNotFound;
