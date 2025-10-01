import React from 'react';
import Navbar from './components/Navbar';
import PageCatatan from './pages/PageCatatan';
import PageArsipCatatan from './pages/PageArsipCatatan';
import TambahCatatan from './components/TambahCatatan';
import SearchCatatan from './components/SearchCatatan';

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <TambahCatatan />
        <PageCatatan />
      </main>
    </>
  );
};

export default App;
