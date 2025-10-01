import React from 'react';

const TambahCatatan = () => {
  return (
    <div className="flex flex-col mx-10 mt-25 bg-slate-50 shadow-md rounded-xl px-10 py-5">
      <h2 className="font-bold text-2xl mb-4">Buat Catatan</h2>
      <form className="flex flex-col gap-3 w-full">
        <div className="flex justify-end">
          <p className="text-sm text-gray-500">Sisa karakter:</p>
        </div>
        <input
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Ini Judul Catatan"
          required
        />
        <textarea
          className="w-full border border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Tuliskan Catatanmu Disini"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-sky-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition-colors w-full font-bold"
        >
          Buat Catatan
        </button>
      </form>
    </div>
  );
};

export default TambahCatatan;
