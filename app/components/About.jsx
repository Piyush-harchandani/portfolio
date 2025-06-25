import React from 'react'
import Image from 'next/image'
import profile3 from '@/assets/profile3.png'
import { infoList, toolsData } from '@/assets/assets'

const About = () => {
  return (
    <div id="about" className='w-full px-[12%] py-10 scroll-mt-20 mt-100'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>
      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src={profile3} alt="Piyush Harchandani" className='w-full rounded-3xl' />
        </div>
        <div className='flex-1'>
          <p className='mb-10 max-w-2xl'>
            I'm a final-year B.E. student at Thadomal Shahani Engineering College, driven by a passion for technology and innovation.
            I specialize in Full Stack Development and Data Analytics, with experience in machine learning and modern web frameworks.
            Proficient in C, C++, Java, Python, and well-versed in Data Structures and Algorithms.
          </p>

          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li key={index} className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black'>
                <Image src={icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                <p className='text-gray-600 text-sm'>{description}</p>
              </li>
            ))}
          </ul>

          <h4 className='my-6 text-gray-700'>Tools I use</h4>
          <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-transalte-y-1 duration-500' key={index}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
            <p className="my-6 text-gray-700 bg-gray-100 border border-gray-300 px-4 py-3 rounded-xl shadow-sm text-sm sm:text-base">
              Also using <span className="font-semibold text-black">Jupyter Notebook</span> and <span className="font-semibold text-black">Google Colab</span> for Data Classification.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About
