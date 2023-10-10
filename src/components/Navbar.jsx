import React from 'react'
import '../index.css';
import {FaBell, FaSearch} from 'react-icons/fa';
import {AiFillMessage} from 'react-icons/ai';
import {BsFillPersonFill} from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className="w-screen">
        <ul className="flex p-2 ml-3 gap-5 mt-3">
            <li className="text-lg font-semibold"><img src='/pin.png' height={40} width={40} alt="pin"/></li>
            <li className="text-base font-semibold hover:text-white hover:bg-black rounded-3xl p-2 active:text-green-600 cursor-pointer">Home</li>
            <li className="text-base font-semibold hover:text-white hover:bg-black rounded-3xl p-2 cursor-pointer">Explore</li>
            <li className="text-base font-semibold hover:text-white hover:bg-black rounded-3xl p-2 cursor-pointer">Create</li>
            <li><FaSearch className="absolute inline-block -translate-y-2/4 left-[82%] top-10"/><input type="search" placeholder='Search here...' className="text-black border bg-gray-200 h-10 rounded-full w-60rem p-4 "></input></li>
            <li className="cursor-pointer hover:bg-slate-300 rounded-full p-2"><FaBell size={25}/></li>
            <li className="cursor-pointer hover:bg-slate-300 rounded-full p-2"><AiFillMessage size={25}/></li>
            <li className="cursor-pointer hover:bg-slate-300 rounded-full p-2"><BsFillPersonFill size={25}/></li>
        </ul>
    </div>
  )
}

export default Navbar