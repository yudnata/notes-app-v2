import React from 'react';
import CardArsip from '../components/CardCatatan/CardArsip';

const PageArsipCatatan = ({ notes, onDelete, onUnarchive }) => {
  return (
    <div className="bg-white mx-10 mt-10 rounded-2xl shadow-md pb-7 mb-7">
      <h2 className="text-2xl font-bold pl-10 pt-5 pb-5">Catatan Arsip</h2>
      {notes.length > 0 ? (
        <div className="grid mx-4 sm:mx-10 gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
        <p className="text-center text-gray-500">Arsip kosong</p>
      )}
    </div>
  );
};

export default PageArsipCatatan;
