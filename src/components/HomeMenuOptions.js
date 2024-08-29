import Image from 'next/image'
import React from 'react'
import PizzaCard from '@/components/PizzaCard'
import SectionHeader from '@/components/SectionHeader'

const HomeMenuOptions = () => {
  return (
    <section className='overflow-hidden'>
      <div className='absolute  left-0 right-0 '>
        <div className='  absolute left-0 -top-24 -z-10 overflow-hidden'>
        <Image src='/sallad1.png' height={200} width={120} alt='sallad'/>
        </div>
        <div className=' absolute right-0 -top-40 -z-10 '>
        <Image src='/sallad2.png' height={200} width={120} alt='sallad'/>
        </div>
      </div>
    <div className='text-center py-6'>
<SectionHeader subHeader='check out' mainHeader="Menu"/>
    </div>

    <div className='grid grid-cols-3 gap-6'>

      {/* card */}
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
<PizzaCard/>
    </div>
    </section>
  )
}

export default HomeMenuOptions
