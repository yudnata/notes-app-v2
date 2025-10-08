import React, { useState, useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleContext';
import { ThemeContext } from '../contexts/ThemeContext';

const TambahCatatan = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  const titleCharLimit = 50;

  const onTitleChangeEventHandler = (event) => {
    if (event.target.value.length <= titleCharLimit) {
      setTitle(event.target.value);
    }
  };

  const onBodyChangeEventHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (!title.trim() || !body.trim()) return;
    addNote({ title, body });
    setTitle('');
    setBody('');
    const bodyInput = event.target.querySelector('[contentEditable]');
    if (bodyInput) bodyInput.innerHTML = '';
  };

  // Warna dinamis berdasarkan tema
  const bgColor = theme === 'light' ? 'bg-white' : 'bg-gray-900';
  const textColor = theme === 'light' ? 'text-gray-800' : 'text-white';
  const borderColor = theme === 'light' ? 'border-gray-300' : 'border-gray-700';
  const inputBg = theme === 'light' ? 'bg-gray-50' : 'bg-gray-700';

  return (
    <div
      className={`flex flex-col px-10 py-6 mx-10 mt-8 shadow-md rounded-2xl transition-all duration-300 ${bgColor}`}
    >
      <h2 className={`mb-4 text-2xl font-extrabold ${textColor}`}>
        {locale === 'id' ? 'Buat Catatan' : 'Create Note'}
      </h2>

      <form
        onSubmit={onSubmitEventHandler}
        className="flex flex-col w-full gap-4"
      >
        <div className="flex justify-end">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {locale === 'id' ? 'Sisa karakter' : 'Characters remaining'}:{' '}
            <span className="font-semibold text-orange-500">{titleCharLimit - title.length}</span>
          </p>
        </div>

        <input
          type="text"
          value={title}
          onChange={onTitleChangeEventHandler}
          placeholder={locale === 'id' ? 'Ini Judul Catatan' : 'This is the Note Title'}
          required
          className={`w-full px-4 py-2 rounded-lg border ${borderColor} ${inputBg} ${textColor} focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all`}
        />

        <div
          contentEditable
          onInput={onBodyChangeEventHandler}
          data-placeholder={
            locale === 'id' ? 'Tuliskan Catatanmu di sini...' : 'Write your note here...'
          }
          className={`w-full min-h-[150px] px-4 py-3 border ${borderColor} ${inputBg} ${textColor} rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all`}
        ></div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white transition-all duration-300 bg-orange-500 rounded-lg hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98]"
        >
          {locale === 'id' ? 'Simpan Catatan' : 'Save Note'}
        </button>
      </form>
    </div>
  );
};

export default TambahCatatan;
