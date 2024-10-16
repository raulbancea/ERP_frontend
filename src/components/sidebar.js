import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/documents');
  };

  return (
    <div className="bg-light p-3" style={{ height: '100vh' }}>
      <button className="btn btn-secondary w-100 mb-3">Data Analysis</button>
      <nav>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/" className="btn btn-link">Home</Link>
          </li>
          <li className="list-group-item">
            <Link to="/employees" className="btn btn-link">Employees</Link>
          </li>
          <li className="list-group-item">
            <Link to="/documents" className="btn btn-link">Documents</Link>
          </li>
          <li className="list-group-item">
            <Link to="/inventory" className="btn btn-link">Inventory</Link>
          </li>
          <li className="list-group-item">
            <Link to="/transactions" className="btn btn-link">Transactions</Link>
          </li>
        </ul>
      </nav>
      <button className="btn btn-primary w-100 mt-3" onClick={handleClick}>
        Upload Document
      </button>
    </div>
  );
};

export default Sidebar;
