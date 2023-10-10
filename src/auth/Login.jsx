import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-300'>
        <div className='bg-white p-4 w-1/4 rounded-xl shadow-lg items-center flex flex-col'>
        <img src='/pin.png' alt="" className='h-10'></img>
        <span className='font-bold text-2xl mb-2 text-center'>Welcome to Curated</span>
            <form className='flex flex-col gap-4 w-72'>
                <input type="email" placeholder='Enter email'className='rounded-xl p-2 border border-gray-500 hover:border-red-500 hover:shadow'></input>
                <input type="password" placeholder='Enter password'className='rounded-xl p-2 border border-gray-500 hover:border-red-500 hover:shadow'></input>
                <button type="submit" className='bg-red-500 text-white rounded-xl p-2'>Login</button>
            </form>
            <p className='text-sm mt-2'>Don't have an account? <span className='text-blue-800 cursor-pointer'>Register</span></p>
        </div>
    </div>
  )
}

export default Login