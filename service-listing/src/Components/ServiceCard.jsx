import React from 'react'
import './ServiceCard.css'

const ServiceCard = () => {
  return (
    <>
    <div className="cards">
        <div className='card'>
            <div className="title">
                <h2>Web development</h2>
            </div>
            <div className="breif">
                <p>Creating web apps or browser based apps</p>
            </div>
        </div>
        <div className='card'>
            <div className="title">
                <h2>Full Stack</h2>
            </div>
            <div className="breif">
                <p>Creating web apps or browser based apps both front-end and back-end</p>
            </div>
        </div>
        <div className='card'>
            <div className="title">
                <h2>Code debugging</h2>
            </div>
            <div className="breif">
                <p>debuging code and fixing errors</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceCard