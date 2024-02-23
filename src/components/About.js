import React from 'react'
import image from '../assets/night.jpg'

const About = () => {
  return (
    <div className=''>
     <div className='about-image'>
      <img src={image} alt="" />
      <h1>About</h1>
     </div>
     <div className='mx-5 mt-5'>
      <div className=''>
        <h3>Our History</h3>
        <p>Trippy is owned and managed by Trippy .in Pvt Ltd, a leading brand in web designing sevice and e-commerce solutions. Trippy .in Pvt Ltd is counted for its expertise in web solutions and its topranking business portals. Our invincible expertise and rich experienced has raised our spirits and reach ahead from our cliens expectation. Commendable sucess rate of other portals managed by Trippy is a live program of our work excellence</p>
      </div>
      <div className='mt-4'>
        <h3>Our Mission</h3>
        <p>Our mission is to horizon where our capabilities may sucessfully meet with the requirements of our clients,that too with ultimate transparency and cost-effectiveness</p>
      </div>
      <div className='mt-4'>
        <h3>Our Vision</h3>
        <p>To sow the seeds of par-excellenc services with customer centric approach and reap the trust of worldwide clients</p>
      </div>
     </div>
    </div>
  )
}

export default About
