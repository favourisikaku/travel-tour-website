import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className=''>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><h1>TRIPPY</h1></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav text-center ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item d-flex">                                  
                <Link className="nav-link active" aria-current="page" to="/"><i className="fa-solid fa-house"></i> Home</Link>
              </li>
              <li className="nav-item" >                
                <Link className="nav-link active" aria-current="page" to="/about"><i className="fa-solid fa-circle-info mx-1"></i>About</Link>
              </li>
              <li className="nav-item">              
                <Link className="nav-link active" aria-current="page" to="/service"> <i className="fa-solid fa-briefcase mx-1"></i>Service</Link>
              </li>
              <li className="nav-item">               
                <Link className="nav-link active" aria-current="page" to="contact"><i className="fa-solid fa-address-book mx-1"></i>contact</Link>
              </li>            
            </ul>			
          </div>
        </div>
      </nav>
      
    </div>
  )
}

export default Navbar
