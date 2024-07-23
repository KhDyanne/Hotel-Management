import React from 'react'
import Heading1 from './Heading1';
import CustomBase from './CustomBase';
import Advantage1 from './Advantage1';
import Advantage2 from './Advantage2';
import Review from './Review';
import Footer from './Footer';
import Marketplace from './Marketplace';

const Hotel = () => {
  return (
    <div>
    <Heading1 />
    <CustomBase />
    <Marketplace />
    <Advantage1 />
    <Advantage2 />
    <Review />
    <Footer />
    </div>
  )
}

export default Hotel