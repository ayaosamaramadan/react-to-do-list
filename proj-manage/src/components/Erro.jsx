import React from 'react';

function Erro({ d, t }) {
  const iserror = t === '' || d === '';

  return (
    <>
      {iserror && (
        <div className="bg-red-200 text-red-800 p-4 rounded-md">
          {t === '' && d === '' ? (
            <p>Title and Description cannot be empty</p>
            
          ) : t === '' ? (
            <p>Title cannot be empty</p>
          ) : d === '' ? (
            <p>Description cannot be empty</p>
          ) : null}
        </div>
      )}
    </>
  );
}

export default Erro;