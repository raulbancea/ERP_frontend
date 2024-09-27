import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-light p-3" style={{ height: '100vh' }}>
      <button className="btn btn-secondary w-100 mb-3">Analiza date</button>
      <nav>
        <ul className="list-group">
          <li className="list-group-item">Acasa</li>
          <li className="list-group-item">Angajati</li>
          <li className="list-group-item">Documente</li>
          <li className="list-group-item">Inventar</li>
          <li className="list-group-item">Tranzactii</li>
        </ul>
      </nav>
      <button className="btn btn-primary w-100 mt-3">Incarca document</button>
    </div>
  );
};

export default Sidebar;
