'use client'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='hero  py-6'>
        <div className='py-12'>
        <h1 className='text-5xl font-semibold leading-tight'>Everything <br />is better <br />with a&nbsp;<span className='text-primary font-bold'>Pizza</span> </h1>
        <p className='my-6 text-gray-500 text-sm'>Pizza is missing piece that makes every day complete, a simple yet delicious joy in life </p>

        <div className=' flex gap-4 items-center text-sm'>
            <button className='bg-primary text-white px-6 py-2 rounded-full flex gap-2 items-center '>Order Now <CircleArrowRight size={20}/></button>
            <button className='flex gap-2 py-2 items-center text-gray-600 text-semibold'>Learn More <CircleArrowRight size={20}/></button>
            
        </div>
        </div>

<div className=' relative'>
        <Image src="/pizza.png" layout='fill' objectFit='contain' alt='pizzaa' />
</div>
    </section>
  )
}

export default Hero
