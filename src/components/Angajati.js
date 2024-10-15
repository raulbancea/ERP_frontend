import React, { useState, useEffect } from 'react';

const Angajati = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    department: '',
  });

  useEffect(() => {
    fetch('/angajati')
      .then((response) => response.json())
      .then(setEmployees);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/angajati', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newEmployee) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
        setFormData({ name: '', position: '', department: '' });
      });
  };

  const handleDelete = (id) => {
    fetch(`/angajati/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
    });
  };

  return (
    <div className='container'>
      <h2>Angajati</h2>
      <form onSubmit={handleSubmit} className='form-container'>
        <div className='form-group'>
          <input
            name='name'
            placeholder='Employee Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            name='position'
            placeholder='Position'
            value={formData.position}
            onChange={handleChange}
            required
          />
          <input
            name='department'
            placeholder='Department'
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <button type='submit' className='submit-button'>
          Add Employee
        </button>
      </form>

      <table className='styled-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Angajati;
