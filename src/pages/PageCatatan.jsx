import React from 'react';
import CardCatatan from '../components/CardCatatan/CardCatatan';
import SearchCatatan from '../components/SearchCatatan';

const PageCatatan = () => {
  return (
    <div className="bg-slate-50 mx-10 mt-10 rounded-2xl shadow-md pb-7 mb-7">
      <h2 className="text-2xl font-bold pl-10 pt-5 pb-5">Catatan Aktif</h2>
      <div>
        <SearchCatatan />
      </div>
      <div>
        <CardCatatan />
      </div>
    </div>
  );
};

export default PageCatatan;
