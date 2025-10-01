import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex bg-orange-300 justify-between px-20 py-5 text-white shadow-md items-center">
        <h1 className='font-bold text-2xl'>NotesApp</h1>
        <ol className='flex gap-5 font-semibold text-md'>
            <li className='hover:text-white transition ease-in-out duration-300 hover:scale-110 p-1 hover:cursor-pointer'>CatatanSaya</li>
            <li className='hover:text-white transition ease-in-out duration-300 hover:scale-110 p-1 hover:cursor-pointer'>ArsipSaya</li>
        </ol>
    </div>
  );
};

export default Navbar;
