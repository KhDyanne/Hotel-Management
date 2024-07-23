import React from 'react';
import joseph from '../../images/joseph.jpg'

const Review = () => {
  return (
    <div className='mx-8 xl:mx-52'>
        <h1 className='font-bold text-3xl mb-6'>Meet Joseph</h1>
        <p className='mb-6'>See why he loves renting out her property on xxx.com</p>
        <div className='border-solid border-2 border-gray-300 flex gap-10'>
            <img src={joseph} alt='Joseph' className=' w-64 h-64 xl:w-1/4  xl:h-full '/> 
            <div className='p-4 flex-3/4'>
                <h1 className='mb-12 font-bold text-xl xl:mb-16 xl:text-2xl'>"xxx.com is one of the platforms that helps us maintain a high occupancy level. This is mainly due to the instant booking model and the ability to resell canceled rooms more easily."</h1>
                <h3 className='font-bold text-xl'>Joseph Rossi</h3>
                <p className='text-gray-500'>Florence, Italy</p>
            </div>
        </div>
    </div>
  )
}

export default Review