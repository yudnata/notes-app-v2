import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-gray-800">404</h1>
      <p className="text-xl text-gray-600">Halaman tidak ditemukan</p>
      <Link
        to="/"
        className="mt-5 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default PageNotFound;
