import React from 'react'
import Image from 'next/image'

const PizzaCard = () => {
  return (
    <div className='bg-gray-200 hover:bg-slate-100 transition-all hover:shadow-md duration-75 p-4 rounded-lg text-center '>
  <Image src='/pizza.png' height={250} width={250} alt='pizza'/>
  <h4 className='font-semibold text-2xl my-2'>Pepporoni pizza</h4>
  <p className='text-gray-500 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, natus. lorem10</p>
  <div className='flex justify-between items-center '>
<h2 className='text-xl font-semibold'>$12</h2>
  <button className='bg-primary text-white rounded-lg px-4 py-2 font-semibold my-3'>Add to Cart</button>
  </div>
</div>
  )
}

export default PizzaCard
