import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, LogOut } from 'lucide-react';
import SearchCatatan from './SearchCatatan';
import { ThemeContext } from '../contexts/ThemeContext';
import { LocaleContext } from '../contexts/LocaleContext';

const Navbar = ({ searchKeyword, onKeywordChange, authedUser, onLogout }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);

  const baseBg = theme === 'light' ? 'bg-white text-gray-900' : 'bg-gray-900 text-gray-100';
  const shadowStyle = theme === 'light' ? 'shadow-md' : 'shadow-lg shadow-black/30';

  const buttonBase =
    'p-2 rounded-full transition-all duration-300 flex items-center justify-center';
  const btnTheme =
    theme === 'light'
      ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      : 'bg-gray-700 text-gray-200 hover:bg-gray-600';

  const linkBase =
    'p-2 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:cursor-pointer';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-5 sm:px-20 ${baseBg} ${shadowStyle}`}
    >
      <h1 className="text-xl font-bold tracking-tight text-orange-500 sm:text-2xl">
        <Link to="/">NotesApp <span className='text-red-500'>v3</span></Link>
      </h1>

      {authedUser && (
        <div className="flex-grow mx-4 sm:mx-10">
          <SearchCatatan
            keyword={searchKeyword}
            onKeywordChange={onKeywordChange}
          />
        </div>
      )}

      <div className="flex items-center gap-2 sm:gap-4">
        {authedUser && (
          <ol className="flex gap-2 text-sm font-semibold sm:text-base">
            <li
              className={`${linkBase} ${
                theme === 'light'
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-green-600 text-white hover:bg-green-500'
              }`}
            >
              <Link to="/">{locale === 'id' ? 'Catatan Saya' : 'My Notes'}</Link>
            </li>
            <li
              className={`${linkBase} ${
                theme === 'light'
                  ? 'bg-orange-500 text-white hover:bg-orange-600'
                  : 'bg-orange-600 text-white hover:bg-orange-500'
              }`}
            >
              <Link to="/arsip">{locale === 'id' ? 'Arsip Saya' : 'My Archives'}</Link>
            </li>
          </ol>
        )}

        <button
          onClick={toggleTheme}
          className={`${buttonBase} ${btnTheme}`}
        >
          {theme === 'light' ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          onClick={toggleLocale}
          className={`${buttonBase} ${btnTheme} font-bold`}
        >
          {locale === 'id' ? 'ID' : 'EN'}
        </button>

        {authedUser && (
          <button
            onClick={onLogout}
            className="p-2 text-white transition-all duration-300 bg-red-500 rounded-full hover:bg-red-600"
            title={locale === 'id' ? 'Keluar' : 'Logout'}
          >
            <LogOut size={20} />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
