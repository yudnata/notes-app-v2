import React, { useContext } from 'react';
import CardArsip from '../components/CardCatatan/CardArsip';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';

const PageArsipCatatan = ({ notes, onDelete, onUnarchive }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  // Warna dinamis berdasarkan tema
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const borderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';

  return (
    <div
      className={`mx-10 mt-10 shadow-md rounded-2xl pb-7 mb-7 transition-colors duration-300 ${bgColor}`}
    >
      <h2
        className={`pt-5 pb-5 pl-10 text-2xl font-bold transition-colors duration-300 ${textColor}`}
      >
        {locale === 'id' ? 'Catatan Arsip' : 'Archived Notes'}
      </h2>

      {notes.length > 0 ? (
        <div
          className={`grid grid-cols-1 gap-5 mx-4 sm:mx-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${borderColor}`}
        >
          {notes.map((note) => (
            <CardArsip
              key={note.id}
              note={note}
              onDelete={onDelete}
              onUnarchive={onUnarchive}
            />
          ))}
        </div>
      ) : (
        <p
          className={`text-center transition-colors duration-300 ${
            theme === 'light' ? 'text-gray-500' : 'text-gray-400'
          }`}
        >
          {locale === 'id' ? 'Arsip kosong' : 'Archive is empty'}
        </p>
      )}
    </div>
  );
};

export default PageArsipCatatan;
