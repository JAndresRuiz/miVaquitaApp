import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from '../assets/icons/Logo.svg?react';

const GroupList = () => {
  const [data, setData] = useState([]); // State para almacenar los datos de la API

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/groups/');
      const data = response.data;

      setData(data);
    };

    fetchData();
  }, []); // Se ejecuta solo al montar el componente

  return (
    <>
      <div className='mt-28'>
        {data.map((item) => (
          <div className='flex m-4 shadow p-4' key={item.id}>
            <div
              className='flex w-20 h-20 rounded-md shadow-lg'
              style={{ background: `${item.color}` }}
            >
              <Logo className='transform scale-150 m-auto ' />
            </div>
            <div className='pl-8'>
              <div>
                <h2 className='font-semibold text-xl'>{item.name}</h2>
                <h3 className='font-semibold text-m'>
                  Debes <span className='text-red-700'>$12.000</span>
                </h3>
              </div>
              <div className='w-max flex justify-between'>
                <button className='bg-black text-white font-semibold pt-1 pb-1 pr-3 pl-3 rounded-md shadow-xl'>
                  Editar
                </button>
                <button className='bg-black text-white font-semibold pt-1 pb-1 pr-3 pl-3 rounded-md shadow-xl ml-3'>
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default GroupList;