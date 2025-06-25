import { assets } from '@/assets/assets'
import profile1 from '@/assets/profile1.png'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className="w-11/12 max-w-4xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 px-4">
      
      {/* Profile Image */}
      <div initial={{scale: 0}} whileInView={{scale: 1}} transition={{duration: 0.8, type:'spring', stifness: 100}}>
        <Image src={profile1} alt="Piyush Harchandani" className="rounded-full w-32 mt-100 sm:w-[150px] sm:h-[150px]" />
      </div>

      {/* Heading */}
      <h3 className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-3">
        Hi! I'm Piyush Harchandani
        <Image src={assets.hand_icon} alt="waving hand" className="w-6 h-6" />
      </h3>

      {/* Main Title */}
      <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold leading-tight">
        A Full Stack Developer & Data Analyst with a passion for building intelligent, scalable solutions.
      </h1>

      {/* Description Paragraph 1 */}
      <p className="max-w-2xl mx-auto text-gray-700">
        I combine software development with machine learning and data analytics to create powerful products that solve real-world problems.
        I'm proficient in modern web frameworks like <strong>React</strong> and <strong>Node.js</strong>, as well as data tools such as <strong>Python, Pandas, NumPy, and scikit-learn</strong>.
      </p>

      {/* Description Paragraph 2 */}
      <p className="max-w-2xl mx-auto text-gray-700">
        My skillset includes programming in <strong>Java, Python, C, C++</strong>, along with strong knowledge of <strong>Data Structures and Algorithms</strong>. These skills allow me to build efficient, scalable solutions across frontend, backend, and performance-critical systems.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a href="#contact" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition">
          Contact Me
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </a>
        <a href="/sample-resume.pdf" download className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-gray-100 transition">
          My Resume
          <Image src={assets.download_icon} alt="download icon" className="w-4" />
        </a>
      </div>
    </div>
  )
}

export default Header
