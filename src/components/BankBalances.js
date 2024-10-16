import React from 'react';

const BankBalances = () => {
  return (
    <div className="mt-4">
      <h2>Bank balance</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Bank</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="text" className="form-control" placeholder="Bank name" /></td>
            <td><input type="text" className="form-control" placeholder="amount" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BankBalances;
