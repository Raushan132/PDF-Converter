import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className='flex justify-between px-4 gap-5 items-center py-4 shadow-md shadow-black bg-white'>
            <div className='flex mr-20'><p className=''>Logo</p></div>
            <div className='flex md:flex-1'>
                <nav className='flex gap-10 self-start'>
                    <Link to={'/merge'} className='font-semibold'>MERGE PDF</Link>
                    <Link className='font-semibold'>SPLIT PDF</Link>
                    <Link to={'/pageNo'} className='font-semibold'>ADD PAGE NO</Link>
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