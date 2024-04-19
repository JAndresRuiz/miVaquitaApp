import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const CreateGroup = ({ isOpen, closeModal }) => {

  const colors = [
    '#d50cbc',
    '#3cde12',
    '#36190D',
    '#ffffff',
    '#ffab00',
    '#fc8cbe',
    '#ff0000',
    '#fc8cbe'
  ];

const [name, setName] = useState("");
const [color, setColor] = useState("");
const [debt, setDebt] = useState(0);
const [selectedColor, setSelectedColor] = useState('');

const fetchData = async () => {
  const response = await axios.post('http://localhost:3001/group/', {name: name, color: color, debt:debt} )
  .then((res) => {
    closeModal();
    alert("Grupo Creado exitosamente")
  })
  setName("");
  setColor("");
  setSelectedColor('');
};

const  onSelectColor = (color) => {
  setSelectedColor(color);
  setColor(color);
};

  if (!isOpen) return null;

  return (
    <>
      <div className='w-5/6 h-3/6 bg-white z-50 fixed ml-8 mt-8 flex flex-col place-items-center rounded-md '>
        <div onClick={closeModal} className='absolute place-self-end pr-3 pt-2 font-extrabold'>X</div>
        <div>
          <h1 className='text-black font-bold text-2xl mt-6 mb-4'>Nuevo grupo</h1>
        </div>
        <div>
          <input type='text' placeholder='Nombre del grupo' value={name} onChange={(e) => setName(e.target.value)} />
          <img src='' alt='' />
        </div>
        <div className='grid grid-cols-4 justify-around h-2/6 w-4/6 mt-6 border border-black rounded-md'>
          {colors.map((color, index) => (
            <div className={`w-10 h-10 border cursor-pointer rounded-md m-auto ${
              selectedColor === color ? 'border-4 border-black' : ''
            }`} style={{ backgroundColor: color }} key={index} onClick={() => onSelectColor(color)} >
            </div>
          ))}
        </div>
        <button className='w-4/6 h-8 bg-black text-white font-extrabold rounded mt-4' onClick={fetchData} >Crear</button>
      </div>
    </>
  );
};

export default CreateGroup;
