import React, { useState } from 'react';

const TambahCatatan = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
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
    addNote({ title, body });
    setTitle('');
    setBody('');
    // Mengosongkan div setelah submit
    const bodyInput = event.target.querySelector('[contentEditable]');
    if (bodyInput) {
      bodyInput.innerHTML = '';
    }
  };

  return (
    <div className="flex flex-col mx-10 mt-5 bg-white shadow-md rounded-xl px-10 py-5">
      <h2 className="font-bold text-2xl mb-4">Buat Catatan</h2>
      <form
        className="flex flex-col gap-3 w-full"
        onSubmit={onSubmitEventHandler}
      >
        <div className="flex justify-end">
          <p className="text-sm text-gray-500">
            Sisa karakter: {titleCharLimit - title.length}
          </p>
        </div>
        <input
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-orange-400"
          type="text"
          placeholder="Ini Judul Catatan"
          value={title}
          onChange={onTitleChangeEventHandler}
          required
        />
        <div
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-orange-400 resize-none min-h-[120px]" // Menambah tinggi minimum
          contentEditable
          data-placeholder="Tuliskan Catatanmu Disini..."
          onInput={onBodyChangeEventHandler}
        ></div>
        <button
          type="submit"
          className="bg-orange-400 text-white rounded-md px-4 py-2 hover:bg-orange-500 transition-colors w-full font-bold"
        >
          Buat Catatan
        </button>
      </form>
    </div>
  );
};

export default TambahCatatan;