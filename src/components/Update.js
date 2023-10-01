import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { API_URL } from '../EmployeDetails/EmployeeAPI'
import {useNavigate} from 'react-router-dom'

function Update() {
  const [id,setId] = useState('')
  const [eid,setEid] = useState('')
  const [name,setName] = useState('')
  const [dob,setDob] = useState('')
  const [address,setAddress] = useState('')
  const [email,setEmail] = useState('')
  const [mobile,setMobile] = useState('')

  useEffect(()=>{
    setId(localStorage.getItem('id'));
   setEid(localStorage.getItem('eid'));
    setName(localStorage.getItem('name'));
    setDob(localStorage.getItem('dob'));
    setAddress(localStorage.getItem('address'));
   setEmail(localStorage.getItem('email'));
   setMobile(localStorage.getItem('mobile'));
  },[])
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
   await axios.put(API_URL + id, {
      name,
      eid,
      dob,
      address,
      email,
      mobile
    })
    setAddress('');
    setDob('');
    setEid('');
    setEmail('');
    setName('');
    setMobile('');

    alert("Updated Successfully");
    navigate('/Read')
  }

  const handleReset = () => {
    setAddress('');
    setDob('');
    setEid('');
    setEmail('');
    setName('');
    setMobile('');
  }

  return (
    <div className='container'>
        <h1 className='mx-auto text-center text-danger  bg-warning rounded-3 p-2'>Update Employee Details</h1>
      <div>
        <div className='card mx-auto p-2 mt-3' style={{boxShadow:'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'}}>


          <form onSubmit={handleUpdate}>
            <div className="row">
              <div className="col-6">
                <label className='form-label '  style={{fontWeight:'700'}}>Name </label>
                <input type='text' onChange={e => { setName(e.target.value) }} value={name} className='form-control' placeholder='Enter Employee Name'></input>
              </div>
              <div className="col-6">
                <label className='form-label '  style={{fontWeight:'700'}}>ID </label>
                <input type='text' onChange={e => { setEid(e.target.value) }} value={eid} className='form-control' placeholder='Enter Employee ID'></input>
              </div>
              <div className="col-6">
                <label className='form-label '  style={{fontWeight:'700'}}>DOB </label>
                <input type='date' onChange={e => { setDob(e.target.value) }} value={dob} className='form-control' ></input>
              </div>
              <div className="col-6">
                <label className='form-label'  style={{fontWeight:'700'}}>Address </label>
                <input type='text-area' onChange={e => { setAddress(e.target.value) }} value={address} className='form-control' placeholder='Enter Employee Address'></input>
              </div>
              <div className="col-6">
                <label className='form-label '  style={{fontWeight:'700'}}>Email </label>
                <input type='text' onChange={e => { setEmail(e.target.value) }} value={email} className='form-control' placeholder='Enter Employee Email'></input>
              </div>
              <div className="col-6">
                <label className='form-label '  style={{fontWeight:'700'}}>Mobile No </label>
                <input type='text' onChange={e => { setMobile(e.target.value) }} value={mobile} className='form-control' placeholder='Enter Employee Mobile No'></input>
              </div>
              <div className='d-flex justify-content-center pt-2 pb-2 mt-3'>
                <button type='submit' className='btn btn-primary me-4' >Update</button>
                <button type='reset' onClick={handleReset} className='btn btn-warning ' >Reset</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update