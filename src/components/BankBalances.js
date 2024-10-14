
import React from 'react';

const BankBalances = () => {
  return (
    <div className="mt-4">
      <h2>Solduri in banci</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Banca</th>
            <th>Sold</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" className="form-control" placeholder="Nume banca" /></td>
            <td><input type="text" className="form-control" placeholder="Sold" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BankBalances;
