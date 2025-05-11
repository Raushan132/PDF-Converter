import React from 'react'
import { Link } from 'react-router-dom'
import logo_img from '../assets/logo.png'
const Header = () => {
  return (
    <>
        <div className='flex justify-between px-4 gap-5 items-center py-4 shadow-md shadow-black bg-white'>
            <Link to={"/"} className='flex items-center gap-2 mr-20'><p className='w-10 h-10'><img className='w-full h-full' src={logo_img} /></p>
            <div className='font-bold text-2xl uppercase'>Online PDF</div>
            </Link>
            
            <div className='flex md:flex-1'>
                <nav className='flex gap-10 self-start'>
                    <Link to={'/merge'} className='font-semibold'>MERGE PDF</Link>
                    <Link className='font-semibold'>SPLIT PDF</Link>
                    <Link to={'/pageNo'} className='font-semibold'>ADD PAGE NO</Link>
                    <Link to={'/image-convert'} className='font-semibold'>Img To PDF</Link>
                </nav>
            </div>
            <div>
                <div className='flex gap-10'>
                    <button className='px-4 py-2 bg-blue-500 rounded-lg text-white font-bold'>Login</button>
                    <button className='px-4 py-2 bg-green-500 rounded-lg text-white font-bold'>Sign up</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header