const API = [
  {
    "name": "Grupo1",
    "color": "#3cde12",
    "id": 1
  },
  {
    "name": "Grupo2",
    "color": "#36190D",
    "id": 2
  },
  {
    "name": "Grupo3",
    "color": "#36190D",
    "id": 3
  },
  {
    "name": "Grupo4",
    "color": "#3cde12",
    "id": 4
  },
  {
    "name": "Grupo5",
    "color": "#ffffff",
    "id": 5
  }
];

import React from 'react';
import { useEffect, useState } from 'react';
import Header from './Header';
import Logo from '../assets/icons/Logo.svg?react';
import CreateGroup from './CreateGroup';
//import ApiComponent from "./ApiCosumer.jsx";

const Groups = () => {

  const [boxCreator, setBoxCreator] = useState([]);



  return (
    <>
      <Header />

      <div className='m-8 flex flex-row w-5/6 justify-between'>
        <div>
          <h3 className='font-semibold text-m'>Debes</h3>
          <h1 className='font-semibold text-red-700 text-3xl'>$45.000</h1>
        </div>
        <div>
          <button className='bg-black rounded text-white pl-3 pr-3 pt-1 pb-1 font-bold shadow-lg'>Nuevo grupo</button>
        </div>

      </div>
      <div>
        {API.map((item) => (
          <div className='flex m-4 shadow p-4' key={item.id}>
            <div className='w-20 h-20 rounded-md shadow-lg' style={{ background: '#3cde12' }}>
              <Logo className="" />
            </div>
            <div className='pl-8'>
              <div>
                <h2 className='font-semibold text-xl'>{item.name}</h2>
                <h3 className='font-semibold text-m'>Debes <span className='text-red-700'>$12.000</span></h3>
              </div>
              <div className='w-max flex justify-between'>
                <button className='bg-black text-white font-semibold pt-1 pb-1 pr-3 pl-3 rounded-md shadow-xl'>Editar</button>
                <button className='bg-black text-white font-semibold pt-1 pb-1 pr-3 pl-3 rounded-md shadow-xl ml-3'>Eliminar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export { Groups };
