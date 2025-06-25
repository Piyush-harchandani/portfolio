import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-[12%]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Piyush Harchandani. All rights reserved.
        </p>
        <p className="text-sm">
          Contact me at{" "}
          <a
            href="mailto:harchandanipiyush48@gmail.com"
            className="text-blue-400 underline hover:text-blue-600"
          >
            harchandanipiyush48@gmail.com
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
