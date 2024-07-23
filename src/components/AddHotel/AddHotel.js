import React, { useState } from 'react';
import MainHeader from '../MainHeader';
import FormHotel from './FormHotel';
import FormRoom from './FormRoom';
import Card from './Card';
import Promotion from './Promotion';

const AddHotel = () => {
  const [step, setStep] = useState(1);
  const [hotel, setHotel] = useState({});
  const [cards, setCards] = useState([]);

  const handleAddHotel = (hotelDetails) => {
    setHotel(hotelDetails);
    setStep();
  };

  const handleAddRoom = (roomDetails) => {
    setCards((prevCards) => [...prevCards, { hotel, room: roomDetails }]);
    setStep(1);
  };

  const deleteCard = (id) => {
    setCards((prevCards) => prevCards.filter((_, index) => index !== id));
  };

  return (
    <div className='bg-white'>
      <MainHeader />
      <Promotion />
      {step === 1 ? (
        <FormHotel onAddHotel={handleAddHotel} />
      ) : (
        <FormRoom onAddRoom={handleAddRoom} hotel={hotel} />
      )}
      <div className='grid grid-cols-1 px-24 mx-4 mb-9 gap-6 justify-center md:grid-cols-2 lg:grid-cols-3'>
        {cards.map((cardItem, index) => (
          <Card
            key={index}
            id={index}
            hotel={hotel}
            room={cardItem.room}
            onDelete={deleteCard}
          />
        ))}
      </div>
    </div>
  );
};

export default AddHotel;

