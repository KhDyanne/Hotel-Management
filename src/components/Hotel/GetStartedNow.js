import React from 'react'
import { useNavigate } from 'react-router-dom'

const GetStartedNow = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
  }

  return (
    <div className='bg-white rounded-sm text-black w-full float-end xl:w-3/4'>
      <div className='border-b border-gray-300 p-7 flex-col '>
        <h2 className='font-bold text-3xl mb-5'>Earn more with consistent bookings</h2>
        <div className='flex gap-2 mb-1.5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          <h3>45% of partners get their first booking within a week</h3>
        </div>
        <div className='flex gap-2 mb-1.5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          <h3>More than 1.1 million vacation rental guests since 2023</h3>
        </div>
        <div className='flex gap-2 mb-1.5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          <h3>Full control over your property and finances</h3>
        </div>
        <div className='flex gap-2 mb-1.5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="green" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          <h3>Registration is free and takes 15 minutes</h3>
        </div>
      </div>

      <div className='flex items-center justify-center w-full p-3'>
        <button
          type='button'
          className='bg-indigo-600 p-3 rounded-sm w-9/12 my-2.5 text-white gap-2 flex items-center justify-center hover:bg-red-500'
          onClick={handleButtonClick}
        >
          Get Started Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>

      <div className='border-t border-gray-300 p-4'>
        <h5 className='font-bold'>Already started registration?</h5>
        <a href='#' className='text-indigo-600 hover:underline hover:underline-offset-auto'>Continue your registration</a>
      </div>
    </div>
  )
}

export default GetStartedNow
