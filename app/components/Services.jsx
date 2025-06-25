import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20 '>
      <h4 className='text-center mb-2 text-lg'>What I offer</h4>
      <h2 className='text-center text-5xl'>My Services</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
        I specialize in Full Stack Development and Data Analytics, with experience in machine learning and modern web frameworks.
         Proficient in C, C++, Java, Python, and well-versed in Data Structures and Algorithms.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500'>
                <Image src={icon} alt='icon' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700' >{title}</h3>
                <p className='text-sm text-gray-600 leading-5' >{description}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services