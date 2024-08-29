import React from 'react'

const SectionHeader = ({subHeader,mainHeader}) => {
  return (
    <>
    <h3 className='uppercase text-gray-600 font-semibold'>{subHeader}</h3>
    <h2 className='text-primary font-bold text-4xl '>{mainHeader}</h2>
    </>
  )
}

export default SectionHeader

