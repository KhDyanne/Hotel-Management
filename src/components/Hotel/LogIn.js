import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backImg from '../../images/background-image.jpg';
import validator from 'validator';
import { Link } from 'react-router-dom';

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const navigate = useNavigate();

  const isFormValid = () => {
    return (
      validator.isEmail(email) && password.length >= 9 
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  };

  return (
    <div className='bg-gradient-to-r from-[#dea6a6] from-10% via-[#9D6CD2] via-30% to-[#481edc] to-90% flex items-center justify-center h-screen'>
      <div className='bg-black-dark bg-slate-200 max-w-[960px] grid items-center p-5 py-14 rounded-2xl lg:grid-cols-2 lg:gap-20 lg:p-7'>
        <div className='relative'>
          <img src={backImg} className='hidden w-full h-[500px] lg:block' alt="/" />
        </div>

        {/* EMAIL */}
        <div className='max-w-80 grid gap-8'>
          <h1 className='text-5xl font-bold text-violet-800 text-center lg:text-left'>Login</h1>
          <form onSubmit={handleSubmit} className='space-y-8'>
            <div className='relative'>
              <div className='absolute bg-indigo-200 rounded-full p-2' style={{ zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </div>
              <input
                type='email'
                placeholder='Email Address'
                className='w-80 py-2 px-12 rounded-full focus:outline-none focus:drop-shadow-lg focus:ring-1 to-blue-50'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

          {/* PASSWORD */}
            <div className='relative'>
              <div className='absolute bg-indigo-200 rounded-full p-2' style={{ zIndex: 10 }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </div>
              <input
                type='password'
                placeholder='Password'
                className='w-80 py-2 px-12 rounded-full focus:outline-none focus:drop-shadow-lg focus:ring-1 to-blue-5'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

             <button
              type='submit'
              className='bg-gradient-to-r from-cyan-200 to-violet-300 w-80 font-semibold rounded-full py-2 hover:bg-gradient-to-l mt-7'
              disabled={!isFormValid()}
            >
              Sign in
            </button>
          </form>

          {/* THIRD-PARTY LOGIN */}
          <div className='border-t border-blue-300 p-4 pb-0 text-center text-sm text-gray-600'>
            <p>or login using</p>
            <div className='flex justify-center gap-3 mt-6'>
              <a href='#' className='border-solid border-2 border-blue-200 rounded-full p-1 hover:border-blue-300'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
              </a>
              <a href='#' className='border-solid border-2 border-blue-200 rounded-full p-1 hover:border-blue-300'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                  <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                </svg>
              </a>
              <a href='#' className='border-solid border-2 border-blue-200 rounded-full p-1 hover:border-blue-300'>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                  <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                  <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className='space-y-4 text-sm'>
            <p>Don't have an account?
              <Link to="/signup">
                <span className='text-blue-600 font-semibold cursor-pointer hover:underline hover: underline-offset-4'>   Sign Up</span>
              </Link>
            </p>
            <p>Forget password?<span className='text-blue-600 font-semibold cursor-pointer hover:underline hover: underline-offset-4'> Reset password</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;

