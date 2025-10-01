import React from 'react';
import { Search } from 'lucide-react';

const SearchCatatan = ({ keyword, onKeywordChange }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-3 border bg-white border-gray-200 rounded-xl px-4 py-2 focus-within:border-orange-400 transition duration-300">
        <Search className="text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Cari catatanmu..."
          className="w-full outline-none text-black placeholder-gray-400 bg-transparent"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchCatatan;
