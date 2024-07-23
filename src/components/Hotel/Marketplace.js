import React from 'react';
import product1 from '../../images/product1.jpg';
import product2 from '../../images/product2.jpg';
import product3 from '../../images/product3.jpg';
import product4 from '../../images/product4.jpg';
import product5 from '../../images/product5.jpg'; 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

const Marketplace = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
    
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='flex flex-col gap-10 m-auto w-3/4 my-20'>
      <div className='flex flex-col gap-2'>
        <h1 className='uppercase text-5xl font-semibold text-indigo-800 lg:text-7xl text-left'><span className='text-pink-600'>Expand</span> your</h1>
        <h1 className='uppercase text-5xl font-semibold text-indigo-800 lg:text-7xl'>business</h1>
        <p className='text-gray-700 text-xl lg:text-2xl'>Do you want to see your products here in the list?</p>
      </div> 
      {/* CAROUSEL */}
      <div>
      <div className='pt-5 pb-12'>
        <h1 className='text-4xl font-semibold text-indigo-800'>Come and join us!</h1>
      </div>
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className='bg-white  text-black rounded-xl drop-shadow-lg mb-4'>
              <div className='rounded-t-xl bg-indigo-200 flex justify-center items-center py-5'>
                <img src={d.img} alt={d.name} className='h-36 w-36 rounded-full md:h-44 md:w-44'/>
              </div>
              <div className='flex flex-col justify-center items-center gap-3 p-5'>
                <p className='text-lg font-semibold sm1:text-xl'>{d.name}</p> 
                <p className='text-[16px] md:text-[17px]'>{d.review}</p>
              </div>
            </div>
          ))}
        </Slider> 
      </div>
    </div>

   
       
  )
}

const data = [
  {
    name: 'Flower Pop Mug',
    img: product1,
    review: "Gorgeous flowers are always popping up in the Spring, but this mug will help give you that same beauty year-round. Enjoy your favorite beverage, and the image of some Spring flowers"
  },
  {
    name: 'Khurja pottery products',
    img:  product2,
    review: "Exclusive Lane Leaves Imprinted Ceramic Bathroom Accessories Set of 3 items (Liquid Soap Dispenser, Toothbrush Holder, Tumbler). Perfect Bath Soap Dispensers"
  },
  {
    name: 'Khurja pottery products',
    img: product3,
    review: "Ceramic Hand Painted Multipurpose Large Bowls 470Ml Set of 2. There might be slightly design variation which is natural because of firing under 1200 degree Celsius."
  },
  {
    name: 'Five Pretty Flowers',
    img: product4,
    review: "This plate is created employing the tools and techniques used by the Pennsylvania German potters in 19th centuries. This platter was handmade in a mid-1700s stone house."
  },
  {
    name: 'Vintage Boncath Pottery Preserve Jar',
    img: product5,
    review: "Super Sweet Vintage Bonarth Pottery jam jar. Made for Welsh Lady Preserves. Designed by Dave Parkin. Circa 1970s Made in Wales Height 13.5cm "
  }
];

export default Marketplace