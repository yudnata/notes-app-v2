import React from 'react';
import { Link } from 'react-router-dom';
import TombolHapus from '../Button/TombolHapus';
import TombolPindahArsip from '../Button/TombolPindahArsip';
import { showFormattedDate } from '../../utils';
import parser from 'html-react-parser';

const CardArsip = ({ note, onDelete, onUnarchive }) => {
  return (
    <div className="border border-gray-400 rounded-xl">
      <article className="flex flex-col px-5 py-2 h-full">
        <div className="flex-grow">
          <h3 className="font-bold text-2xl pt-2">
            <Link to={`/catatan/${note.id}`}>{note.title}</Link>
          </h3>
          <p className="font-light text-sm mb-2">{showFormattedDate(note.createdAt)}</p>
          <div className="prose">{parser(note.body)}</div>
        </div>
        <div className="flex gap-2 justify-end pb-2">
          <TombolHapus onClick={() => onDelete(note.id)} />
          <TombolPindahArsip onClick={() => onUnarchive(note.id)} />
        </div>
      </article>
    </div>
  );
};

export default CardArsip;
