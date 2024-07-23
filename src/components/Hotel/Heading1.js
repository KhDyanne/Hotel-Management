import GetStartedNow from './GetStartedNow';
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";



const Heading1 = () => {
  return (
    // HEADER
    <div className='bg-violet-800 py-10 px-6 lg:px-52  '>
      <div className='flex justify-between mb-10'>
       <div>
        <h1 className='text-3xl font-bold text-white'>xxx.com</h1>
       </div>
       <div className='flex justify-center align-middle gap-3'>
        <h3 className='font-bold pt-2 text-white'>Already a partner?</h3>
        <Link to="/login" className='border-solid border-2 p-2 border-white font-semibold text-white cursor-pointer rounded-md hover:bg-indigo-400'>Log In</Link>
        <Link to="/signup" className='p-2 bg-indigo-600 text-white font-semibold cursor-pointer rounded-md hover:bg-red-500'>Sign Up</Link>
       
       </div>
    </div>


    <div className='flex flex-col text-white justify-between items-center gap-12 xl:flex-row'>
      <div className='font-bold text-3xl text-center leading-snug flex-1 xl:text-4xl xl:leading-normal xl:text-left'>
        <h1>List your</h1>
          <section className=''>
        
          <TypeAnimation
            sequence={[
           'hotels',
           1000, 
           'products',
           1000,
          'services',
          1000,
           'anything',
           1000
         ]}
         wrapper="span"
         speed={50}
         style={{ fontSize: '2em', display: 'inline-block', color:' #7BC9FF' }}
         repeat={Infinity}
        />
           </section>
            <h1>on xxx.com</h1>
            <p className='font-thin text-2xl mt-2'>Whether hosting is your side passion or full-time job, register your vacation rental on xxx.com to reach travelers worldwide</p>
          </div>
          <div className=' flex-1'>
          <GetStartedNow />
          </div>
        </div>
    </div>
  )
}

export default Heading1