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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
 <div className="border border-gray-300 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-all mt-10">
  <h3 className="text-lg font-semibold text-gray-800">
    Retail Sales & Customer Behavior Analysis
  </h3>
  <p className="text-sm text-gray-600 mt-2">
    Applied data mining techniques to classify customer behavior using data preprocessing, visualization,
    and machine learning in Python.
  </p>
  <a
    href="https://github.com/Piyush-harchandani/Retail-sales-and-customer-behaviour-analysis"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-4 text-blue-600 text-sm font-medium underline"
  >
    View on GitHub
  </a>
</div>
<p className="text-center max-w-3xl mx-auto text-gray-700 text-sm sm:text-base mt-8">
  The <span className="font-semibold">Blog</span>, <span className="font-semibold">LMS</span>, <span className="font-semibold">Image Generator</span>, and <span className="font-semibold">Crypto App</span> are full stack projects built using modern frameworks like <span className="font-medium">React, Next.js, Node.js, and Express</span>. Each project is connected to a <span className="font-medium">MongoDB</span> database and integrates various third-party APIs and authentication mechanisms. On the other hand, the <span className="font-semibold">Retail Sales & Customer Behavior Analysis</span> project is a data-driven machine learning analysis using a public dataset, focusing on classification techniques, data preprocessing, visualization, and model building with Python and libraries like <span className="font-medium">Pandas, Matplotlib, and Scikit-learn</span>.
</p>
<div className="text-center mt-10">
  <p className="text-gray-700 text-sm sm:text-base">
    I'm also practicing coding and data structures.
  </p>
  <a
    href="https://leetcode.com/u/harchandanipiyush12/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 text-sm sm:text-base font-medium underline mt-1 inline-block"
  >
    View my LeetCode profile
  </a>
</div>
</div>
  )
}

export default Work
