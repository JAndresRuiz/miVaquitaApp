import React from 'react'

const Debts = ({setModalOpen, modalOpen }) => {
  return (
    <div className={`${modalOpen ? 'bg-gray-500 h-screen opacity-50' : null} absolute w-screen`}>
        <div className={`p-8 flex flex-row justify-between w-full`}>
          <div>
            <h3 className='font-semibold text-m'>Debes</h3>
            <h1 className='font-semibold text-red-700 text-3xl'>$45.000</h1>
          </div>
          <div>
            <button onClick={() => setModalOpen(true)} className='bg-black rounded text-white pl-3 pr-3 pt-1 pb-1 font-bold shadow-lg '>
              Nuevo grupo
            </button>
          </div>
        </div>
      </div>
  )
}

export default Debts