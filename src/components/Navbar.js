import React from 'react'

const Navbar = () => {
  return (
    <div className=' shadow shadow-black/30'>
        <div className='flex  justify-between container mx-auto py-7 items-center'>
        <div>
           <a href="/"> <h1 className='font-bold text-2xl text-red-500'>Shop<span className='text-white'>Nest</span></h1> </a>
        </div>
        <ul className='flex gap-10 items-center font-medium '>
            <li className='hover:text-red-500 transition-all duration-300'><a href="/">Home</a></li>
            <li className='hover:text-red-500 transition-all duration-300'><a href="/contact">Contact</a></li>
            <li className='hover:text-red-500 transition-all duration-300'><a href="/products">Products</a></li>
            <li className='hover:text-red-500 transition-all duration-300'><a href="/about">About</a></li>
  
        </ul>
        <div className='flex gap-3 justify-center items-center'>
            <button className='bg-red-400 px-5 py-2 rounded-md border-red-400 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 cursor-pointer'>Sign in</button>
            <button className='border border-red-400 px-5 py-2 rounded-md text-red-500 hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 cursor-pointer'>Sign up free</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar