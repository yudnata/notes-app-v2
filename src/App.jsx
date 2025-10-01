import React, { useState, useEffect } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';
import { getAllNotes, addNote, deleteNote, archiveNote, unarchiveNote } from './utils/local-data';
import Navbar from './components/Navbar';
import PageCatatan from './pages/PageCatatan';
import PageArsipCatatan from './pages/PageArsipCatatan';
import TambahCatatan from './components/TambahCatatan';
import PageDetailCatatan from './pages/PageDetailCatatan';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  const onAddNoteHandler = ({ title, body }) => {
    addNote({ title, body });
    setNotes(getAllNotes());
  };

  const onDeleteNoteHandler = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
  };

  const onArchiveNoteHandler = (id) => {
    archiveNote(id);
    setNotes(getAllNotes());
  };

  const onUnarchiveNoteHandler = (id) => {
    unarchiveNote(id);
    setNotes(getAllNotes());
  };

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <>
      <header>
        <Navbar
          searchKeyword={keyword}
          onKeywordChange={onKeywordChangeHandler}
        />
      </header>
      <main className="pt-24">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TambahCatatan addNote={onAddNoteHandler} />
                <PageCatatan
                  notes={filteredNotes.filter((note) => !note.archived)}
                  onDelete={onDeleteNoteHandler}
                  onArchive={onArchiveNoteHandler}
                />
              </>
            }
          />
          <Route
            path="/arsip"
            element={
              <PageArsipCatatan
                notes={filteredNotes.filter((note) => note.archived)}
                onDelete={onDeleteNoteHandler}
                onUnarchive={onUnarchiveNoteHandler}
              />
            }
          />
          <Route
            path="/catatan/:id"
            element={<PageDetailCatatan />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </main>
    </>
  );
};

export default App;
