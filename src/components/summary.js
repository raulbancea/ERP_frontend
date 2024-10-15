import React from 'react';

const Summary = () => {
  return (
    <div className="summary-section mt-5">
      <div className="mb-3">
        <div className="card text-white bg-primary">
          <div className="card-body">
            <h5 className="card-title">Balanta</h5>
            <p className="card-text">0 RON</p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="card text-white bg-success">
          <div className="card-body">
            <h5 className="card-title">Intrari</h5>
            <p className="card-text">0 RON</p>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="card text-white bg-danger">
          <div className="card-body">
            <h5 className="card-title">Iesiri</h5>
            <p className="card-text">0 RON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
