import React, { useContext } from 'react';
import { Search } from 'lucide-react';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';

const SearchCatatan = ({ keyword, onKeywordChange }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  const containerBase =
    'flex items-center gap-3 px-4 py-2 rounded-xl border transition-all duration-300 focus-within:shadow-md focus-within:ring-2 focus-within:ring-orange-500';
  const lightClasses = 'bg-white border-gray-200 text-gray-800';
  const darkClasses = 'bg-gray-800 border-gray-700 text-gray-100';

  const iconBase = 'w-5 h-5 transition-colors duration-300';
  const inputBase = 'w-full bg-transparent outline-none transition-colors duration-300';

  return (
    <div className="flex flex-col">
      <div className={`${containerBase} ${theme === 'light' ? lightClasses : darkClasses}`}>
        <Search
          className={`${iconBase} ${theme === 'light' ? 'text-gray-400' : 'text-gray-300'}`}
        />
        <input
          type="text"
          placeholder={locale === 'id' ? 'Cari catatanmu...' : 'Search your notes...'}
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
          aria-label={locale === 'id' ? 'Cari catatan' : 'Search notes'}
          className={`${inputBase} ${
            theme === 'light'
              ? 'text-gray-800 placeholder-gray-400'
              : 'text-gray-100 placeholder-gray-500'
          }`}
        />
      </div>
    </div>
  );
};

export default SearchCatatan;
