import React, { useState, useEffect } from 'react';

const Inventar = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    quantity: 0,
  });

  useEffect(() => {
    fetch('/inventar')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/inventar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
        setFormData({ name: '', description: '', quantity: 0 });
      });
  };

  const handleDelete = (id) => {
    fetch(`/inventar/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    });
  };

  return (
    <div className='container'>
      <h2>Inventar</h2>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='form-group'>
          <input
            name='name'
            placeholder='Item Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name='description'
            placeholder='Description'
            value={formData.description}
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
        </div>
        <button type='submit' className='submit-button'>
          Add Item
        </button>
      </form>

      <table className='styled-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventar;
