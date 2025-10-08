import React, { useState, useEffect } from 'react';
import { Routes, Route, useSearchParams, useNavigate, Navigate } from 'react-router-dom';
import {
  getActiveNotes,
  getArchivedNotes,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  getUserLogged,
  putAccessToken,
  getAccessToken,
} from './utils/network-data';
import Navbar from './components/Navbar';
import PageCatatan from './pages/PageCatatan';
import PageArsipCatatan from './pages/PageArsipCatatan';
import TambahCatatan from './components/TambahCatatan';
import PageDetailCatatan from './pages/PageDetailCatatan';
import PageNotFound from './pages/PageNotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Loading from './components/Loading';

const App = () => {
  const [authedUser, setAuthedUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [archivedNotes, setArchivedNotes] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    const fetchUser = async () => {
      if (getAccessToken()) {
        const { data } = await getUserLogged();
        setAuthedUser(data);
      }
      setLoading(false);
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (authedUser) {
      const fetchNotes = async () => {
        setLoading(true);
        const { data: activeData } = await getActiveNotes();
        const { data: archivedData } = await getArchivedNotes();
        setNotes(activeData || []);
        setArchivedNotes(archivedData || []);
        setLoading(false);
      };
      fetchNotes();
    }
  }, [authedUser]);

  const onLoginSuccess = async ({ accessToken }) => {
    setLoading(true);
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    navigate('/');
    setLoading(false);
  };

  const onLogout = () => {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/login');
  };

  const onAddNoteHandler = async ({ title, body }) => {
    setLoading(true);
    await addNote({ title, body });
    const { data } = await getActiveNotes();
    setNotes(data || []);
    setLoading(false);
  };

  const onDeleteNoteHandler = async (id) => {
    setLoading(true);
    await deleteNote(id);
    const { data: activeData } = await getActiveNotes();
    const { data: archivedData } = await getArchivedNotes();
    setNotes(activeData || []);
    setArchivedNotes(archivedData || []);
    setLoading(false);
  };

  const onArchiveNoteHandler = async (id) => {
    setLoading(true);
    await archiveNote(id);
    const { data: activeData } = await getActiveNotes();
    const { data: archivedData } = await getArchivedNotes();
    setNotes(activeData || []);
    setArchivedNotes(archivedData || []);
    setLoading(false);
  };

  const onUnarchiveNoteHandler = async (id) => {
    setLoading(true);
    await unarchiveNote(id);
    const { data: activeData } = await getActiveNotes();
    const { data: archivedData } = await getArchivedNotes();
    setNotes(activeData || []);
    setArchivedNotes(archivedData || []);
    setLoading(false);
  };

  const onKeywordChangeHandler = (keyword) => {
    setSearchParams({ keyword });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const filteredArchivedNotes = archivedNotes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <Navbar
          searchKeyword={keyword}
          onKeywordChange={onKeywordChangeHandler}
          authedUser={authedUser}
          onLogout={onLogout}
        />
      </header>
      <main className="pt-24">
        <Routes>
          {authedUser ? (
            <>
              <Route
                path="/"
                element={
                  <>
                    <TambahCatatan addNote={onAddNoteHandler} />
                    <PageCatatan
                      notes={filteredNotes}
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
                    notes={filteredArchivedNotes}
                    onDelete={onDeleteNoteHandler}
                    onUnarchive={onUnarchiveNoteHandler}
                  />
                }
              />
              <Route
                path="/catatan/:id"
                element={<PageDetailCatatan />}
              />
            </>
          ) : (
            <>
              <Route
                path="/login"
                element={<LoginPage loginSuccess={onLoginSuccess} />}
              />
              <Route
                path="/register"
                element={<RegisterPage />}
              />
              <Route
                path="/"
                element={<Navigate to="/login" />}
              />
            </>
          )}
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
