import React from 'react';
import TombolArsip from '../Button/TombolArsip';
import TombolHapus from '../Button/TombolHapus';

const CardCatatan = () => {
  return (
    <div className="grid mx-4 sm:mx-10 gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="border border-gray-400 rounded-xl">
        <article className="flex flex-col px-5 py-2 h-full">
          <div className="flex-grow">
            <h3 className="font-bold text-2xl pt-2">Judul Catatan</h3>
            <p className="font-light text-sm mb-2">Waktu Catatan</p>
            <p>Isi Catatan</p>
          </div>
          <div className="flex gap-2 justify-end pb-2">
            <TombolHapus />
            <TombolArsip />
          </div>
        </article>
      </div>
    </div>
  );
};

export default CardCatatan;
