import { workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='project' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>My Portfolio</h4>
      <h2 className='text-center text-5xl'>My Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700">
        Here are some of the projects I've worked on during my academic journey and personal learning.
        These projects showcase my skills in Full Stack Web Development, Data Analytics, and Machine Learning —
        from building interactive web applications to analyzing real-world data using Python and visualization tools.
        Each project reflects my hands-on experience with modern technologies and problem-solving abilities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {workData.map(({ title, description, bgImage, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group"
          >
            <div className="relative h-48 w-full">
              <Image
                src={bgImage}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="group-hover:opacity-90 transition-opacity"
                unoptimized // optional in dev for public image paths
              />
            </div>
            <div className="bg-white p-4">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Work
