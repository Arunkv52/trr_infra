import React, { useState } from 'react'
import Logo from '../assets/trrinfra-logo.jpg'
import { MdOutlineMenu, MdClose } from 'react-icons/md'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className='bg-white/80 shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='all-menu flex justify-between items-center px-5 py-3'>
        <div className='head w-[190px]'>
          <img src={Logo} alt='logo' className='w-full' />
        </div>

        <div className='head-list hidden md:block'>
          <ul className='flex gap-6 text-black font-semibold text-[17px]'>
            {['About', 'Specifications', 'Gallery', 'Products', 'Contact'].map((item, index) => (
              <li key={index} className='hover:underline hover:text-blue-700'>
                <a href='#'>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {menuOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className='bg-white md:hidden px-10 py-4 shadow-md'>
          <ul className='flex flex-col gap-4 text-gray-800 font-medium'>
            {['Models', 'Inventory', 'Offers', 'Financial Services'].map((item, index) => (
              <li key={index}>
                <a href='#' onClick={toggleMenu}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
