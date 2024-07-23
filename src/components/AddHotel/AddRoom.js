import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Card from './Card';
import MainHeader from '../MainHeader';
import FormRoom from './FormRoom';

const AddRoom = () => {
  const location = useLocation();
  const hotelDetails = location.state?.hotel;
  const [cards, setCards] = useState([]);

  function addCard(roomDetails) {
    setCards((prevCards) => [...prevCards, { hotel: hotelDetails, room: roomDetails }]);
  }

  function deleteCard(id) {
    setCards((prevCards) => prevCards.filter((cardItem, index) => index !== id));
  }
 
  return (
    <div className='bg-white flex flex-col'>
      <MainHeader />
      <FormRoom onAddRoom={addCard} />
      <div className='grid grid-cols-1 px-24 mx-4 mb-9 gap-6 justify-center md:grid-cols-2 lg:grid-cols-3'>
        {cards.map((cardItem, index) => (
          <Card
            key={index}
            id={index}
            hotel={cardItem.hotel}
            room={cardItem.room}
            onDelete={deleteCard}
          />
        ))}
      </div>
      <Link to='/' className='bg-pink-600 hover:bg-pink-800 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4 m-auto mb-8'>Finish</Link>
    </div>
  );
};

export default AddRoom;

