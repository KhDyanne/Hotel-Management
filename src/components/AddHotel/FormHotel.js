import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormHotel = () => {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState({
    address: '',
    hotelType: '',
    name: '',
    description: '',
    longitude: '',
    latitude: '',
    province: '',
    phoneNumber: '',
    city: '',
    checkIn: '',
    checkOut: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setHotel((prevHotel) => ({
      ...prevHotel,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/addroom', { state: { hotel } });
  };

  return (
    <div className='flex flex-col items-center px-24'>
      <h1 className='font-bold text-3xl text-indigo-950 text-center p-3 my-6'>Add Your Hotel</h1>
      
      <form onSubmit={handleSubmit} className='grid grid-cols-1 text-center gap-6 rounded-md w-full lg:grid-cols-2'>
        <input
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none '
          name='country'
          onChange={handleChange}
          value={hotel.country}
          placeholder='Country'
          required
        />
        <input
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='hotelType'
          onChange={handleChange}
          value={hotel.hotelType}
          placeholder='Hotel type'
        />
        <input
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='name'
          onChange={handleChange}
          value={hotel.name}
          placeholder='Name'
          required
        />
        <textarea
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='description'
          onChange={handleChange}
          value={hotel.description}
          placeholder='Description...'
          rows='3'
          required
        />
        <input
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='longitude'
          onChange={handleChange}
          value={hotel.longitude}
          placeholder='Longitude'
        />
        <input
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='latitude'
          onChange={handleChange}
          value={hotel.latitude}
          placeholder='Latitude'
        />
        <input
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='province'
          onChange={handleChange}
          value={hotel.province}
          placeholder='Province'
          required
        />
        <input
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='phoneNumber'
          onChange={handleChange}
          value={hotel.phoneNumber}
          placeholder='Phone number'
          required
        />
        <input
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='city'
          onChange={handleChange}
          value={hotel.city}
          placeholder='City'
          required
        />
           
        <button className='w-[144px] h-[36px] drop-shadow-lg mt-6 cursor-pointer rounded-md bg-blue-400 hover:bg-blue-300 mx-auto'>
          Add
        </button>
      </form>
      
    </div>
  );
};

export default FormHotel;
