import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/documente');
  };

  return (
    <div className="bg-light p-3" style={{ height: '100vh' }}>
      <button className="btn btn-secondary w-100 mb-3">Analiza date</button>
      <nav>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/" className="btn btn-link">Acasa</Link>
          </li>
          <li className="list-group-item">
            <Link to="/angajati" className="btn btn-link">Angajati</Link>
          </li>
          <li className="list-group-item">
            <Link to="/documente" className="btn btn-link">Documente</Link>
          </li>
          <li className="list-group-item">
            <Link to="/inventar" className="btn btn-link">Inventar</Link>
          </li>
          <li className="list-group-item">
            <Link to="/tranzactii" className="btn btn-link">Tranzactii</Link>
          </li>
        </ul>
      </nav>
      <button className="btn btn-primary w-100 mt-3" onClick={handleClick}>
        Incarca document
      </button>
    </div>
  );
};

export default Sidebar;
