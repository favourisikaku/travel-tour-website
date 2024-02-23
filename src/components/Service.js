import React from 'react'
import image from '../assets/night.jpg'
import image4 from '../assets/5.jpg'
import image5 from '../assets/8.jpg'
import image6 from '../assets/6.jpg'

const Service = () => {
  return (
    <div>
      <div className='service-image'>
        <img src={image} alt="" />
        <h1>Service</h1>
      </div>
      <div className='service-container'>
        <div className='text-center mt-5 service-header'>
          <h1>Recent Trips</h1>
          <p>You can discover uniqe destinations using Google maps</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-2 mt-5">
          <div className="col mb-5">
            <div className="card m-auto">
              <img src={image4} className="card-img-top mx-2" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Trip in Indonesia</h5>
                <p className="card-text">Indonesia, officially the Republic of Indonesia, is a country in the Southeast Asia and Oceanic between the indiana and pacific oceans, it consists of over 17,000 islands, including Sumatra,java,Sulawesi and parts of Borneo and New Guinea</p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card m-auto">
              <img src={image5} className="card-img-top mx-2" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Trip in Malaysia</h5>
                <p className="card-text">Malaysia is a Southeast Asia country occupying parts of the Malay Penisula and the island of Borneo. It's known for beaches, rainforests and mix of Malay, Chinease,Indiana and European cultural influences.</p>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card m-auto">
              <img src={image6} className="card-img-top mx-2" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Trip in France</h5>
                <p className="card-text">France, in thr western Europe encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, it's capital is formed for it's fashion houses, classical art museums including the Louvre and monumentus like the Effiel Tower.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service
