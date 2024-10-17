import React from 'react';
import { useLocation } from 'react-router-dom';

const RecentOperations = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
    return null;
  }

  return (
    <div className="card mt-4">
      <div className="card-header">
        <h5>Recent operations</h5>
      </div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Money</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/09/2024</td>
              <td>Business 1</td>
              <td>500 RON</td>
              <td>Inputs</td>
            </tr>
            <tr>
              <td>05/09/2024</td>
              <td>Business 2</td>
              <td>700 RON</td>
              <td>Outputs</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOperations;
