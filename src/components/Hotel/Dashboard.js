import React from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '../MainHeader';

const Dashboard = () => {
  return (
    <div className='p-3'>
      <MainHeader />
      <div className='flex justify-center items-center min-h-screen'>
        <div className='flex flex-col lg:flex-row gap-8 justify-center rounded-lg'>
          <div className='flex flex-col justify-between gap-3 bg-slate-100 p-8 lg:p-16 rounded-md shadow-lg transform transition-all duration-300 hover:scale-105 w-full max-w-md lg:max-w-lg'>
            <h1 className='font-bold text-indigo-500 text-2xl md:text-3xl'>Add Hotel</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
              <Link to='/addhotel'>
                <button className='w-full bg-indigo-500 text-white p-2 rounded-md mt-4'>Start</button>
              </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

