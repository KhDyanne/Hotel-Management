import React from 'react'
import GetStartedNow from './GetStartedNow';

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <div className='bg-violet-700 pt-14 pb-6 px-10 mt-14 xl:px-52'>
      <div className='flex flex-col justify-center items-center mb-10 xl:flex-row'>
        <h1 className='text-white font-semibold text-3xl  leading-relaxed inline-block align-middle p-6 flex-1 xl:text-5xl'>Sign up and start welcoming customers today!</h1>
        <div className='flex-1'> 
        <GetStartedNow />
        </div>
      </div>


      <div className='border-b-2 border-solid border-white p-5 text-white flex justify-between'>
        <div className='flex-col'>
           <h1 className='font-bold mb-5 tetx-xl'>Discover</h1>
           <a href='#'className='hover:underline hover:underline-offset-2 font-thin'>Trust&Safety</a>
        </div>
        <div className='flex-col'>
           <h1 className='font-bold mb-5 text-xl'>Useful Links</h1>
           <ul>
            <li className='hover:underline hover:underline-offset-2 font-thin'><a href='#'>Extranet</a></li>
            <li className='hover:underline hover:underline-offset-2 font-thin'><a href='#'>GuideMe for Android</a></li>
            <li className='hover:underline hover:underline-offset-2 font-thin'><a href='#'>GuideMe for iOS</a></li>
           </ul>     
                     
        </div>
        <div className='flex-col'>
           <h1 className='font-bold text-xl mb-5'>Help and communities</h1>
           <ul>
            <li className='hover:underline hover:underline-offset-2 font-thin'><a href='#'>Partner Help</a></li>
            <li className='hover:underline hover:underline-offset-2 font-thin'><a href='#'>Partner Community</a></li>
            <li className='hover:underline hover:underline-offset-2 font-thin'><a href='#'>How-to videos</a></li>
           </ul>                     
        </div>
      </div>

      <div className='text-white flex justify-between py-5'>
        <h3><a href='#'>About Us</a> | <a href='#'>Privacy & Cookie Statement</a></h3>
        <h3>©Copyright {year}</h3>
      </div>
      
    </div>
  )
}

export default Footer