import React from 'react';
import { Link } from 'react-router-dom';
import SearchCatatan from './SearchCatatan';

const Navbar = ({ searchKeyword, onKeywordChange }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex bg-white justify-between px-20 py-5 text-white shadow-md items-center">
      <h1 className="font-bold text-2xl text-orange-400">
        <Link to="/">NotesApp v2</Link>
      </h1>
      <div className="flex-grow mx-10">
        <SearchCatatan
          keyword={searchKeyword}
          onKeywordChange={onKeywordChange}
        />
      </div>
      <ol className="flex gap-2 font-semibold text-md">
        <li className="hover:text-white transition ease-in-out duration-300 hover:scale-103 p-2 hover:cursor-pointer bg-green-500 rounded-xl">
          <Link to="/">Catatan Saya</Link>
        </li>
        <li className="hover:text-white transition ease-in-out duration-300 hover:scale-103 p-2 hover:cursor-pointer bg-orange-500 rounded-xl">
          <Link to="/arsip">Arsip Saya</Link>
        </li>
      </ol>
    </div>
  );
};

export default Navbar;
