import React, { useState, useRef } from 'react';
import ImageUpload1 from './ImageUpload1';

const FormRoom = ({ onAddRoom }) => {
  const imageUploadRef = useRef();
  const [roomDetails, setRoomDetails] = useState({
    name: '',
    description: '',
    image: '',
    hasAC: false,
    hasFreeWifi: false,
    hasBreakfast: false,
    isSmoking: false,
    price: '',
    bedType: '',
    bedsCount: '',
    price: '',
    taxes: '',
    breakfastPrice: '',
    maxPerson: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRoomDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRoom(roomDetails);
    imageUploadRef.current.resetImage();
    // Clear form fields after submission if needed
    setRoomDetails({
      name: '',
      description: '',
      image: '',
      hasAC: false,
      hasFreeWifi: false,
      hasBreakfast: false,
      isSmoking: false,
      price: '',
      bedType: '',
      bedsCount: '',
      price: '',
      taxes: '',
      breakfastPrice: '',
      maxPerson: ''
    });
  };

  const handleImageUpload = (imageURL) => {
        setRoomDetails((prevRoom) => ({
          ...prevRoom,
          image: imageURL
        }));
      };

  return (
    <div className='flex flex-col items-center p-6 px-32'>
      <h2 className='font-bold text-3xl text-indigo-950 text-center p-3'>Add Room Details</h2>
      <ImageUpload1 ref={imageUploadRef} onImageUpload={handleImageUpload} />
      <form onSubmit={handleSubmit} className='grid grid-cols-1 text-center gap-3 rounded-md w-1/2'>
       
       <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='font-semibold text-left text-sm pl-1'>Room name</label>
        <input
          id='name'
          type='text'
          name='name'
          value={roomDetails?.name || ''}
          onChange={handleChange}
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          placeholder='Enter room name'
          required
        />
        </div>

        <div className='flex flex-col gap-1'>
         <label htmlFor="description" className='font-semibold text-left text-sm pl-1'>Description</label>
         <textarea
          id='description'
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='description'
          onChange={handleChange}
          value={roomDetails?.description || ''}
          placeholder='Description...'
          rows='3'
          required
        />
        </div> 

        <div className='flex flex-col gap-1'>
         <label htmlFor="size" className='font-semibold text-left text-sm pl-1'>Room size</label>
         <input
          id='size'
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='size'
          onChange={handleChange}
          value={roomDetails?.size || ''}
          placeholder='Size'
          required
        />
        </div>

        <div>
          <div className='flex flex-col justify-between mx-20 lg:flex-row'>
            <div className='flex gap-3 justify-center'>
              <input
              type="checkbox"
              id="AC"
              name="hasAC"
              checked={roomDetails?.hasAC || ''}
              onChange={handleChange}
              />
              <label htmlFor="AC">Air Conditioner</label>
            </div>

            <div className='flex gap-3 justify-center'>
              <input
              type="checkbox"
              id="freeWifi"
              name="hasFreeWifi"
              checked={roomDetails?.hasFreeWifi || ''}
              onChange={handleChange}
              />
              <label htmlFor="freeWifi">Free Wifi</label>
            </div>
          </div>

          <div className='flex flex-col justify-between mx-20 lg:flex-row'>
            <div className='flex gap-3 justify-center'>
              <input
              type="checkbox"
              id="breakfast"
              name="hasBreakfast"
              checked={roomDetails?.hasBreakfast || ''}
              onChange={handleChange}
              />
              <label htmlFor="breakfast">Breakfast</label>
            </div>

            <div className='flex gap-3 justify-center'>
              <input
                type="checkbox"
                id="smoking"
                name="isSmoking"
                checked={roomDetails?.isSmoking || ''}
                onChange={handleChange}
              />
              <label htmlFor="smoking">Smoking</label>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-1'>
           <label htmlFor="bed-select" className='font-semibold text-left text-sm pl-1'>Choose a bed type:</label>
           <select 
            id="bed-select" 
            name="bedType"
            value={roomDetails?.bedType || ''}
            onChange={handleChange}
            className='border-solid border-2 border-gray-300 p-2 rounded-md px-3 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          >
              <option value="">--Please choose an option--</option>
              <option value="Single bed">Single Bed</option>
              <option value="Double bed">Double Bed</option>
           </select>
        </div>

        <div className='flex flex-col gap-1'>
         <label htmlFor="bedsCount" className='font-semibold text-left text-sm pl-1'>Number of bed</label>
         <input
          id='bedsCount'
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='bedsCount'
          onChange={handleChange}
          value={roomDetails?.bedsCount || ''}
          placeholder='Number of Beds'
          required
         />
        </div>

        <div className='flex flex-col gap-1'>
         <label htmlFor="price" className='font-semibold text-left text-sm pl-1'>Price</label>
         <input
          id='price'
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='price'
          onChange={handleChange}
          value={roomDetails?.price || ''}
          placeholder='Price'
          required
         />
        </div>

        <div className='flex flex-col gap-1'>
         <label htmlFor="tax" className='font-semibold text-left text-sm pl-1'>Tax</label>
         <input
          id='tax'
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='taxes'
          onChange={handleChange}
          value={roomDetails?.taxes || ''}
          placeholder='Taxes'
          required
         />
        </div>

        <div className='flex flex-col gap-1'>
         <label htmlFor="breakfastPrice" className='font-semibold text-left text-sm pl-1'>Breakfast price</label>
         <input
          id='breakfastPrice'
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='breakfastPrice'
          onChange={handleChange}
          value={roomDetails?.breakfastPrice || ''}
          placeholder='Breakfast Price'
          required
         />
        </div>

        <div className='flex flex-col gap-1'>
         <label htmlFor="maxPerson" className='font-semibold text-left text-sm pl-1'>Number of people</label>
         <input
          id='maxPerson'
          className='p-2 rounded-md border-solid border-2 border-gray-300 focus:ring-2 to-indigo-950 focus:outline-none focus:border-none'
          name='maxPerson'
          onChange={handleChange}
          value={roomDetails?.maxPerson || ''}
          placeholder='Number of People'
          required
         />
        </div>
         <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto lg:w-1/4'>
          Add Room
        </button>
    </form>
    </div>
  );
  
};

export default FormRoom;
