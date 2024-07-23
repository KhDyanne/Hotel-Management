import React from 'react';
import hotelIcon from '../../images/hotelIcon.png';

const Card = (props) => {
  console.log("hello")
  const { hotel, room } = props;
  const handleClick = () => {
    props.onDelete(props.id);
  };

  return (
    <div className='flex flex-col justify-between drop-shadow-lg rounded-md bg-slate-100 gap-4 px-10 py-4'>
      <div className='flex flex-col gap-2 justify-center align-middle'>
        {room.image && <img src={room.image} className='h-48 w-full object-cover rounded-md mt-3' />}
        <div className='flex flex-col gap-1 my-2'>
          <h2 className='text-xl font-bold text-indigo-800'>{room?.name || ''}</h2>
          <p>{room?.description || ''}</p>
          <p className='font-semibold'>({room?.size || ''} m<sup>2</sup>)</p>
        </div>
        <div className='flex gap-3'>
          <img src={hotelIcon} className='w-8 h-8' />
          <h1 className='text-xl font-semibold text-indigo-800'>{hotel?.name || ''}</h1>
          <p>{hotel?.description || ''}</p>
         </div>        
      </div>

      <div className='flex flex-col gap-3'>
        <div className='flex gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 my-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <div>
          <p className='font-semibold'>{hotel?.city || ''} city</p>
          <p>{hotel?.province || ''}, {hotel?.country || ''}</p>
          </div>
         
        </div>

        <div>
          <div className='flex justify-between'>
             {
                room?.hasAC || '' && 
                <div className='flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                  </svg>
                  <p>AC</p>
                </div>  
             }
             {
                room?.hasFreeWifi || '' &&   
                <div className='flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                  </svg>
                  <p>Free Wifi</p>
                </div>
             }
          </div>

          <div className='flex justify-between'>
             {
                room?.hasBreakfast || '' && 
                <div className='flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                  </svg>
                  <p>Breakfast</p>
                </div>
             }
             {
                room?.isSmoking || '' && 
                <div className='flex gap-2'>
                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                  <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                  </svg>
                  <p>Smoking</p>
              </div>
             }
          </div>
        </div>

        <div className='flex justify-between text-indigo-600'>
          <div className='flex gap-2'>
            <p>{room?.bedsCount || ''} {room?.bedType || ''}</p>
          </div>
          <div className='flex gap-2'>
            <p>Maximum {room?.maxPerson || ''} people</p>
          </div>
        </div>

        <div className='flex justify-between'>
          <p>Breakfast: <span className='text-green-700 font-bold'>${room?.breakfastPrice || ''}</span></p>
          <p>Tax: <span className='text-green-700 font-bold'>${room?.taxes || ''}</span></p>            
        </div>  

         <div className='flex justify-between'>
          <div>
            <p className='text-[14px] text-indigo-800 font-semibold'>Price:</p>
            <p className='text-[12px]'>(from)</p>
          </div>
          <div>
            <p className='text-green-700 font-bold'>${room?.price || ''}</p>
            <p className='text-[14px]'>per night</p>
          </div>
        </div>      

        <div className='flex justify-between'>
          <div className='flex gap-2'>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
             </svg>
             {hotel?.phoneNumber || ''}
          </div>
        </div>

        <button
          className='border-2 border-solid border-indigo-500 text-indigo-700 p-1 mt-1 rounded-md text-sm w-3/4 mx-auto hover:bg-indigo-500 hover:text-white'
          onClick={handleClick}
        >DELETE
        </button>

      </div>
    </div>
  );
};

export default Card;

