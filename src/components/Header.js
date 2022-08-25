import React from 'react'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      
      <nav className="navbar navbar-expand-lg bg-light" id='rama'>
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link> 
        </li>
      
        <li className="nav-item">
        <Link className="nav-link active" to="/contect">Contect Us</Link> 
        </li>
        <li className="nav-item">
        <Link className="nav-link active" to="/service">Services</Link> 
        </li>
      </ul>
     
    </div>
  </div>
</nav>


    </div>
  )
}

export default Header
