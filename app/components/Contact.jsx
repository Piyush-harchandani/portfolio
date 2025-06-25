import React from 'react'

const Contact = () => {
  return (
    <div
      id='contact'
      className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'
    >
      <h4 className='text-center mb-2 text-lg'>Connect with me</h4>
      <h2 className='text-center text-5xl'>Get in touch</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-4'>
        I'd love to hear from you! If you have any questions, project ideas, collaboration opportunities, or just want to connect, 
        feel free to send me an email at{" "}
        <a
            href="mailto:harchandanipiyush48@gmail.com"
            className="text-blue-500 underline hover:text-blue-700"
        >
            harchandanipiyush48@gmail.com
        </a>. I'm always open to meaningful conversations and new opportunities.
        </p>
    </div>
  )
}

export default Contact
