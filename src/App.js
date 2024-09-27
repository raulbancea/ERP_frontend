import React from 'react';
import Sidebar from './components/sidebar';
import Summary from './components/summary';
import BankBalances from './components/BankBalances';
import RecentOperations from './components/RecentOperations';
import './App.css';

function App() {
  return (
    <div className="container-fluid padding-top">
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>

        <div className="col-md-6">
          <Summary />
          <BankBalances />
        </div>

        <div className="col-md-3">
          <RecentOperations />
        </div>
      </div>
    </div>
  );
}

export default App;
