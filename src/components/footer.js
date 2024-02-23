import React from 'react'

const Footer = () => {
  return (
    <div className='footer bg-dark text-light mt-5'>
      <div className='container d-flex justify-content-between'>
        <div className='mt-5 social'>
          <h1>Trippy</h1>
          <p>Choose your favourite destination</p>
        </div>      
        <div className='mt-5 '>
          <a href="/">  
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/"> 
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/"> 
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        </div>
        <div className='footer-header container mt-4 d-flex justify-content-between'>
          <div className='footer-title'>
            <h3>Project</h3>
            <p>Changelog</p>
            <p>Status</p>
            <p>License</p>
            <p>All versions</p>
          </div>
          <div className='footer-title'>
            <h3>Community</h3>
            <p>GitHub</p>
            <p>Issues</p>
            <p>Project</p>
            <p>Twitter</p>
          </div>
          <div className='footer-title'>
            <h3>Help</h3>
            <p>Support</p>
            <p>Troubleshooting</p>
            <p>Contact Us</p>
          </div>
          <div className='footer-title'>
          <h3>Others</h3>
          <p>Terms of service</p>
          <p>Privacy Policy</p>
          <p>License</p>
        </div>
        </div>       
      </div>   
  )
}

export default Footer
