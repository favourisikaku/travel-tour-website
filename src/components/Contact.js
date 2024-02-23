import React from 'react'
import image from '../assets/2.jpg'

const Contact = () => {
  return (
    <div>
      <div className='contact-image'>
        <img src={image} alt="" />
        <h1>Contact</h1>
      </div>    
      <div className='contact-header m-auto col-6'>
        <h3 className='mb-5 mt-5 text-center'>Send a message to us!</h3>
        <div className="mb-5">
          <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="Name"/>
          <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="Email"/>
          <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="Subject"/>
        </div>
        <div className="mb-3 col-12">
          <textarea className="form-control " id="exampleFormControlTextarea1" rows="5" placeholder="Message"></textarea>
        </div>
        <button className='btn btn-primary col-12'>Send Message</button>
      </div>
    </div>
   
  )
}

export default Contact
