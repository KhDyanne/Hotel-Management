import React from 'react'
import checkList from '../../images/check-list.png'
import document from '../../images/document.png'

const Advantage2 = () => {
  return (
    <div className='mx-12 xl:mx-52'>
        <h1 className='font-bold text-3xl mb-16'>Manage your property with ease</h1>
        <div className='flex justify-around gap-20 mb-16'>
            <div className='flex-1'>
               <img src={checkList} className='w-24 h-24 mb-2.5' />
               <h2 className='font-bold mb-2'>Quick registration</h2>
               <p>Set up your property listing in 15 minutes</p>
            </div>
            <div className='flex-1'>
               <img src={document} className='w-24 h-24 mb-2.5'/> 
               <h2 className='font-bold mb-2'>Transparent Commission</h2>
               <p>Understand what and who you’re paying with transparent commission</p>
            </div>
        </div>

        <div className='flex justify-around gap-20 mb-16'>
            <div className='flex-1'>
               <img src={document} className='w-24 h-24 mb-2.5'/> 
               <h2 className='font-bold mb-2'>Transparent Commission</h2>
               <p>Understand what and who you’re paying with transparent commission</p>
            </div>
            <div className='flex-1'>
               <img src={checkList} className='w-24 h-24 mb-2.5' />
               <h2 className='font-bold mb-2'>Quick registration</h2>
               <p>Set up your property listing in 15 minutes</p>
            </div>
        </div>
    </div>
  )
}

export default Advantage2