import React from 'react'
import oneImg from '../../images/one.jpg';
import twoImg from '../../images/two.jpg';

const Advantage1 = () => {
  return (
    <div className='my-20 mx-8 xl:mx-52 xl:my-40'>

<div className="flex flex-col gap-8 mb-44 justify-center items-center xl:flex-row xl:gap-20">
<h1 className="font-bold text-3xl xl:hidden">Get quality bookings quickly</h1>
    <div className="order-2 flex-1 inline-block align-middle xl:order-1">
      <h1 className=" hidden font-bold text-3xl mb-10 xl:block">Get quality bookings quickly</h1>

      <div className="flex gap-3 items-start mb-8">
        <div className="flex-shrink-0 w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <p>Your review scores on other travel websites are converted and displayed on your property page until you receive your first Booking.com guest review</p>
      </div>

      <div className="flex gap-3 items-start mb-8">
        <div className="flex-shrink-0 w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <p>Stand out in search results with the "New to xxx.com" label on your property</p>
      </div>

      <div className="flex gap-3 items-start mb-8">
        <div className="flex-shrink-0 w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <p>Our listing strength checklist helps you complete your property set-up to attract more guests</p>
      </div>

      <div className="flex gap-3 items-start mb-8">
        <div className="flex-shrink-0 w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <p>Get discovered quickly with our innovative Quality Rating system</p>
      </div>

      <div className="flex gap-3 items-start mb-8">
        <div className="flex-shrink-0 w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <p>Sell up to 30% more nights with the Smart Flex Reservations program, which adds flexibility to some of your existing cancellation policies to attract more guests. If a guest cancels, we will look for a replacement</p>
      </div>
    </div>

    <div className=" order-1 flex-1 flex justify-center items-center xl:order-2">
      <img src={twoImg} alt='Image1' className='inline-block align-middle mb-4 xl:mb-0' />
    </div>
  </div>

<div className="flex flex-col gap-4 justify-center items-center xl:flex-row xl:gap-20"> 
    <h1 className="font-bold text-3xl mb-4 xl:hidden xl:mb-10">Maintain full control over your property and finances</h1>
    <div className="flex-1 flex justify-center items-center">
      <img src={oneImg} alt="Image2" className='inline-block align-middle mb-6 xl:mb-0'/>
    </div>

    <div className="flex-1 justify-center items-center">
      <h1 className="hidden font-bold text-3xl mb-10 xl:block">Maintain full control over your property and finances</h1>
      
      <div className="flex gap-3 items-start mb-8">
        <div className="flex-shrink-0 w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <p>For extra reassurance, we’ll facilitate damage payment requests on your behalf in case of damage up to €/$/£500</p>
      </div>

      <div className="flex gap-3 items-start">
        <div className="flex-shrink-0 w-7 h-7">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full h-full">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>
        <p>Receive protection against liability claims from guests and neighbors up to €/£/$1,000,000 for every reservation</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Advantage1