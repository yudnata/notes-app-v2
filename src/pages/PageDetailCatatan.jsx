import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';

const PageDetailCatatan = () => {
  const { id } = useParams();
  const note = getNote(id);

  if (!note) {
    return <p>Catatan tidak ditemukan!</p>;
  }

  return (
    <div className="bg-slate-50 mx-10 mt-10 rounded-2xl shadow-md p-10">
      <h2 className="text-3xl font-bold mb-2">{note.title}</h2>
      <p className="font-light text-sm mb-5 text-gray-500">{showFormattedDate(note.createdAt)}</p>
      <div className="prose max-w-none">{parser(note.body)}</div>
    </div>
  );
};

export default PageDetailCatatan;
