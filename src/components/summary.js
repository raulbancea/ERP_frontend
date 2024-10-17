import React, { useEffect, useState } from 'react';

const Summary = () => {
  const [balances, setBalances] = useState({ total: 0, income: 0, expenses: 0 });

  useEffect(() => {
    fetch('http://localhost:3000/tranzactii')
      .then((response) => response.json())
      .then((data) => {
        const income = data.filter(trx => trx.transaction_type === 'Intrare').reduce((acc, trx) => acc + trx.quantity, 0);
        const expenses = data.filter(trx => trx.transaction_type === 'Iesire').reduce((acc, trx) => acc + trx.quantity, 0);
        setBalances({ total: income - expenses, income, expenses });
      });
  }, []);

  return (
    <div className="summary-section mt-5">
      <div className="mb-3">
        <div className="card text-white bg-primary">
          <div className="card-body">
            <h5 className="card-title">Balance</h5>
            <p className="card-text">{balances.total} RON</p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="card text-white bg-success">
          <div className="card-body">
            <h5 className="card-title">Inputs</h5>
            <p className="card-text">{balances.income} RON</p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="card text-white bg-danger">
          <div className="card-body">
            <h5 className="card-title">Outputs</h5>
            <p className="card-text">{balances.expenses} RON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
