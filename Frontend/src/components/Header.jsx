import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/icons/Logo.svg?react';
import Person from '../assets/logoPersona.png'

const Header = () => {
  return (
    <>
      <div className="w-full bg-orange-950 text-white flex flex-col h-32 justify-between p-4">
        <div className='w-full flex justify-between h-10'>
          <div className='flex items-end'>
            <div className='w-12 mb-1.5'>
              <Logo />
            </div>
            <h1 className='font-semibold text-xl'>Mi Vaquita</h1>
          </div>
          <div className='w-9 bg-white rounded-full place-self-center'>
            <img src={Person} className='w-9' />
          </div>
        </div>
        <nav>
          <ul className='w-full flex justify-around font-semibold text-xl mb-3'>
            <li><Link to="/friends">Amigos</Link></li>
            <li><Link to="/bills">Gastos</Link></li>
            <li><Link to="/groups">Grupos</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
