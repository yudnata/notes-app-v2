import React from 'react';
import { Link } from 'react-router-dom';
import SearchCatatan from './SearchCatatan';

const Navbar = ({ searchKeyword, onKeywordChange }) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex bg-orange-300 justify-between px-20 py-5 text-white shadow-md items-center">
      <h1 className="font-bold text-2xl">
        <Link to="/">NotesApp</Link>
      </h1>
      <div className="flex-grow mx-10">
        <SearchCatatan
          keyword={searchKeyword}
          onKeywordChange={onKeywordChange}
        />
      </div>
      <ol className="flex gap-5 font-semibold text-md">
        <li className="hover:text-white transition ease-in-out duration-300 hover:scale-110 p-1 hover:cursor-pointer">
          <Link to="/">Catatan Saya</Link>
        </li>
        <li className="hover:text-white transition ease-in-out duration-300 hover:scale-110 p-1 hover:cursor-pointer">
          <Link to="/arsip">Arsip Saya</Link>
        </li>
      </ol>
    </div>
  );
};

export default Navbar;
