import React from 'react';
import image1 from '../assets/12.jpg'
import image2 from '../assets/1.jpg'
import image3 from '../assets/2.jpg'
import image4 from '../assets/5.jpg'
import image5 from '../assets/8.jpg'
import image6 from '../assets/6.jpg'


const Home = () => {
  return (
    <div>
      <div className='home-section'>
        <div className='image-header'>
          <img src={image1} alt=''/>
        </div>
        <div className='home-text'>
          <h1>Your Journey Your story</h1>
          <p>Choose Your favourite Destination</p>
          <button className='btn btn-light'>Travel Plan</button>
        </div>
      </div>  
      <div className=' home-section2'>
        <div className='section2-header mt-5'>
          <h1>Popular Destination</h1>
          <p>Tour gives you the opportunity to see a lot, within a time frame</p>
        </div> 
        <div className='d-flex text-card-header container mt-5'>
          <div className='text-card '>
            <h2>Taal  Volcano, Batangas</h2>
            <p>One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside anisland. If you fancy a closer look, the hike up to the crater is amere 45 minutes and is easy enough for beginners.Guides will assist you most of the wat and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam ventx.The hike can be dusty and hot, so plan for an early morning trip and then unwide with some bulalo before heading back home</p>
          </div>
          <div className='image-cards d-flex '>
            <div className='images-cards-image2 mt-5'>
              <img src={image2} alt="" className='' />
            </div>
            <div className='mx-4'>
              <img src={image3} alt="" />
            </div>           
          </div>
        </div>
          <div className='home-section3  d-flex container'>
            <div className='image-cards2 d-flex'>
              <div className='mt-5 mx-2'>
                <img src={image4} alt="" />
              </div>
              <div className='image5'>
                <img src={image5} alt="" />
              </div>
            </div>
            <div className=''>
              <div className='text-card2 pt-5 mx-5'>
                <h2>Mt.Daguldul, Batangas</h2>
                <p>If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations and small stream. there's asmall store halfway up the trail where you can take a break and drink bukojuice and through the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head down the beach for a refreshing, well-deserved swim.               
                </p>
              </div>             
            </div>
          </div>       
      </div>
      <div className='home-section4'>
        <div className='section4-header'>
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

export default Home
