import React from 'react';
import { Link } from 'react-router-dom';
import question from '../images/question.png';

const MainHeader = () => {
  return (
    <div className='flex justify-between py-3 px-20'>
    <div className='flex gap-4 justify-center items-center'>
      <h1 className='text-violet-800 font-bold text-2xl'>Logo</h1>
    </div>
    <div className='flex items-center gap-3'>
      <Link to="/" className='text-white cursor-pointer'>
        <img src={question} className='w-8 h-8'/>
      </Link>
      
    </div>
  </div>
  )
}

export default MainHeader