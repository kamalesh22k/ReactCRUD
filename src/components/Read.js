/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { API_URL } from '../EmployeDetails/EmployeeAPI';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const callGetAPI = async () => {
    const resp = await axios.get(API_URL);
    setApiData(resp.data);

  }

  const handleDelete = async (id) => {
    await axios.delete(API_URL + id)
    alert("Deleted Successfully")
    callGetAPI();
  }

  const handleUpdate = ({ id, eid, name, dob, address, email, mobile }) => {
    localStorage.setItem('id', id);
    localStorage.setItem('eid', eid);
    localStorage.setItem('name', name);
    localStorage.setItem('dob', dob);
    localStorage.setItem('address', address);
    localStorage.setItem('email', email);
    localStorage.setItem('mobile', mobile);
    navigate('/Update ')

  }

  useEffect(() => {
    callGetAPI();

  }, [])

  return (
    <div className='container' >
      <h1 className='text-center text-danger bg-warning rounded-3 p-2'>Employee Details</h1>
      <div className='d-flex justify-content-end'>
        <button className='btn btn-primary p-1 '><Link to={'/Create'} style={{ color: 'white', textDecoration: 'none' }}><i className="fa-solid fa-plus fa-lg"></i> Add Employeee </Link> </button>
      </div>
      <div className='card mt-2 p-3 table-responsive' style={{minHeight:'50vh'}}>

        <table className="table table-striped ">
          <thead>
            <tr>
              <th>Emp ID</th>
              <th>Emp Name</th>
              <th>Emp Dob</th>
              <th>Emp Address</th>
              <th>Emp Email</th>
              <th>Emp Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map(data => (
              <tr key={data.id}>
                <td>{data.eid}</td>
                <td>{data.name}</td>
                <td>{data.dob}</td>
                <td>{data.address}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
                <td className='d-flex justify-content-around'>
                  <button className='btn' onClick={() => handleUpdate(data)} ><i className="fa-solid fa-pen-to-square fa-lg" style={{ cursor: 'pointer', color: 'blue' }}></i></button>
                  <button className='btn' onClick={() => handleDelete(data.id)}><i className="fa-solid fa-trash fa-lg" style={{ color: 'red' }}></i></button>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Read