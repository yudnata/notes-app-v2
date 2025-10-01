import React from 'react';

const TombolHapus = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border mt-5 px-2 py-2 rounded-md bg-red-500 text-white font-medium transition duration-300 hover:scale-105"
    >
      Delete
    </button>
  );
};

export default TombolHapus;
