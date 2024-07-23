import React from 'react';
import promotion from '../../images/promotion.jpg'

const Promotion = () => {
  return (
    <div className='relative'>
           <img src={promotion} className="w-full object-fill h-[455px] opacity-65 xl:h-[600px]"/>   
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <h1 className='font-bold text-white text-2xl tracking-[8px] sm:text-3xl md:text-4xl xl:text-5xl'>Achieve New Heights with Us</h1>
        </div>     
    </div>
  )
}

export default Promotion