import React, { useState, useEffect } from 'react';

const Tranzactii = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    product_name: '',
    quantity: 0,
    date: '',
  });

  useEffect(() => {
    fetch('http://localhost:3000/tranzactii')
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const transactionData = { transaction: formData };

    fetch('http://localhost:3000/tranzactii', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionData),
    })
      .then((response) => response.json())
      .then((newTransaction) => {
        setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
        setFormData({ product_name: '', quantity: 0, date: '' });
      });
  };

  const handleDelete = (id) => {
    fetch(`/tranzactii/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setTransactions((prevTransactions) => prevTransactions.filter((transaction) => transaction.id !== id));
    });
  };

  return (
    <div className='container'>
      <h2>Tranzactii</h2>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='form-group'>
          <input
            name='product_name'
            placeholder='Product Name'
            value={formData.product_name}
            onChange={handleChange}
            required
          />
          <input
            name='quantity'
            type='number'
            value={formData.quantity}
            onChange={handleChange}
            required
          />
          <input
            name='date'
            type='date'
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='submit-button'>
          Add Transaction
        </button>
      </form>

      <table className='styled-table'>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.product_name}</td>
              <td>{transaction.quantity}</td>
              <td>{transaction.date}</td>
              <td>
                <button onClick={() => handleDelete(transaction.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tranzactii;
