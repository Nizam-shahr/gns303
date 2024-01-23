import React from 'react'
import { products } from 'a/components/data'
import { useRouter } from 'next/router'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Skill() {

const router = useRouter()
const { id } = router.query;

const skillID = products.find((item) => item.id === id)
 
const name = skillID?.name
console.log(name);
  return (
    <div className='product-container'>
        <div className="product-carousel-container ">
          <h1 className='text-6xl font-bold text-center m-4'>{name}</h1>
          <h2 className='made'>This product was made by group {skillID?.group} for the GNS 303 Project</h2>
          <div className="product-carousel">
          
            <h2 className='images-details'>Images <h3>(These are some images Final Product and During the process)</h3> </h2>
            
            
            <Carousel
            className='carousel'
              infiniteLoop
              autoPlay
              showStatus={false}
              showIndicators={false}
              showThumbs={true}
              interval={2000}
            >
              <div className="product-image">
                <img loading="lazy" src={skillID?.images[3]} alt="" />
              </div>
              <div className="product-image">
                <img loading="lazy" src={skillID?.images[4]} alt="" />
              </div>
              <div className="product-image">
                <img loading="lazy" src={skillID?.images[2]} alt="" />
              </div>
              <div className="product-image">
                <img loading="lazy" src={skillID?.images[1]} alt="" />
              </div>
              <div className="product-image">
                <img loading="lazy" src={skillID?.images[0]} alt="" />
              </div>
            </Carousel>
          </div>
         
        </div>
        <div className='project-detail'>
          <h2 className=''>About Project:</h2>
          <p className=''>
              {skillID?.detail}
          </p>
        </div>
        
    </div>
  )
}

export default Skill
