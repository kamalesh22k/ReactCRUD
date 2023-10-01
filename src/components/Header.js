import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div style={{marginBottom:'80px'}}>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand"  href="/Home"><i id='' className="fa-solid fa-people-roof fa-xl" style={{color:'white'}}></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item mx-auto">
                <a className="nav-link" style={{color:'white',fontSize:'20px', fontWeight:'bolder'}} href="/Create" ><i className="fa-solid fa-plus"></i> Add New Employee</a>
              </li>
              <li className="nav-item mx-auto">
                <a className="nav-link" href="/Read" style={{color:'white',fontSize:'20px', fontWeight:'bolder' }} ><i class="fa-solid fa-list-check"></i> All Employee Details</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header