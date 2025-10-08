import React, { useContext } from 'react';
import CardCatatan from '../components/CardCatatan/CardCatatan';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';

const PageCatatan = ({ notes, onDelete, onArchive }) => {
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const emptyText = theme === 'light' ? 'text-gray-500' : 'text-gray-400';

  return (
    <div
      className={`mx-6 md:mx-10 mt-10 mb-8 pb-8 shadow-md rounded-2xl transition-all duration-300 ${bgColor}`}
    >
      <h2 className={`pt-6 pb-4 pl-8 text-2xl font-extrabold tracking-wide ${textColor}`}>
        {locale === 'id' ? 'Catatan Aktif' : 'Active Notes'}
      </h2>

      {notes.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 px-6 sm:px-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notes.map((note) => (
            <CardCatatan
              key={note.id}
              note={note}
              onDelete={onDelete}
              onArchive={onArchive}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <p className={`text-lg font-medium ${emptyText}`}>
            {locale === 'id' ? 'Tidak ada catatan aktif' : 'No active notes available'}
          </p>
          <span className="mt-2 text-sm italic text-gray-400">
            {locale === 'id'
              ? 'Tambahkan catatan baru untuk memulai'
              : 'Add a new note to get started'}
          </span>
        </div>
      )}
    </div>
  );
};

export default PageCatatan;
