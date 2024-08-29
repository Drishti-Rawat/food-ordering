import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between py-2'> 

        <nav className='flex items-center justify-center gap-6 text-gray-500 font-semibold'>
        <Link href="/" className='text-3xl text-primary font-bold'>piszza</Link>
          <Link href="/">Home</Link>
          <Link href="">Menu</Link>
          <Link href="">About</Link>
          <Link href="">Contact</Link>
        </nav>

        <nav className='flex items-center gap-4 justify-center'>
          <Link href="/login" className='text-gray-500 font-semibold'>Login</Link>
          <Link href="/register" className='bg-primary px-6 rounded-full py-1.5 text-white'>Register</Link>

        </nav>
      
    </header>
  )
}

export default Navbar
