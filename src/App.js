import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Summary from './components/summary';
import BankBalances from './components/BankBalances';
import RecentOperations from './components/RecentOperations';
import Angajati from './components/Angajati';
import Documente from './components/Documente';
import Inventar from './components/Inventar';
import Tranzactii from './components/Tranzactii';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container-fluid padding-top">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-6">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Summary />
                    <BankBalances />
                  </>
                }
              />
              <Route path="/angajati" element={<Angajati />} />
              <Route path="/documente" element={<Documente />} />
              <Route path="/inventar" element={<Inventar />} />
              <Route path="/tranzactii" element={<Tranzactii />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
          <div className="col-md-3">
            <RecentOperations />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
