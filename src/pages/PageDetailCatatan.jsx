import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import { showFormattedDate } from '../utils';
import parser from 'html-react-parser';
import Loading from '../components/Loading';
import { LocaleContext } from '../contexts/LocaleContext';

const PageDetailCatatan = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const fetchNote = async () => {
      const { data } = await getNote(id);
      setNote(data);
      setLoading(false);
    };

    fetchNote();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!note) {
    return <p>{locale === 'id' ? 'Catatan tidak ditemukan!' : 'Note not found!'}</p>;
  }

  return (
    <div className="p-10 mx-10 mt-10 bg-white shadow-md dark:bg-gray-800 rounded-2xl">
      <h2 className="mb-2 text-3xl font-bold text-gray-800 dark:text-white">{note.title}</h2>
      <p className="mb-5 text-sm font-light text-gray-500 dark:text-gray-400">
        {showFormattedDate(note.createdAt, locale)}
      </p>
      <div className="prose text-gray-800 max-w-none dark:text-white">{parser(note.body)}</div>
    </div>
  );
};

export default PageDetailCatatan;
