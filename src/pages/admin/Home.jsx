import React from 'react'
import { RiTicketLine, RiMore2Fill } from "react-icons/ri";

const Home = () => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {/*Card casos activos*/}
        <div className='bg-secondary-100 p-8 rounded-xl'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <RiTicketLine className='text-4xl bg-pink-500/10 text-blue-500 p-2 box-content rounded-xl'/>
            </div>
          </div>

          <div>
            <h1 className='text-4xl text-white font-bold mb-3'>999,999</h1>
          </div>
          <p>Casos en desarrollo</p>
        </div>

        {/*Card casos pausados */}
        <div className='bg-secondary-100 p-8 rounded-xl'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <RiTicketLine className='text-4xl bg-pink-500/10 text-orange-500 p-2 box-content rounded-xl' />
            </div>
          </div>

          <div>
            <h1 className='text-4xl text-white font-bold mb-3'>999,999</h1>
          </div>
          <p>Casos en pausa</p>
        </div>

        {/*Card casos QA*/}
        <div className='bg-secondary-100 p-8 rounded-xl'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <RiTicketLine className='text-4xl bg-pink-500/10 text-yellow-500 p-2 box-content rounded-xl' />
            </div>
          </div>

          <div>
            <h1 className='text-4xl text-white font-bold mb-3'>999,999</h1>
          </div>
          <p>Casos en QA</p>
        </div>

        

      </div>

      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-8'>
        
        {/*Card casos atendidos en el mes*/}
        <div className='bg-secondary-100 p-8 rounded-xl'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <RiTicketLine className='text-4xl bg-pink-500/10 text-green-500 p-2 box-content rounded-xl' />
            </div>
          </div>

          <div>
            <h1 className='text-4xl text-white font-bold mb-3'>30</h1>
          </div>
          <p>Casos atendidos en el período</p>
          <p>Del ##/##/#### al ##/##/####</p>
        </div>

        {/*Card total incidencias*/}
        <div className='bg-secondary-100 p-8 rounded-xl'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <RiTicketLine className='text-4xl bg-pink-500/10 text-green-500 p-2 box-content rounded-xl' />
            </div>
          </div>

          <div>
            <h1 className='text-4xl text-white font-bold mb-3'>
              <p>8</p>
              <p>Porc.: 2.7%</p>
            </h1>
          </div>
          <p>Total de incidencias del perído</p>
          <p>Del ##/##/#### al ##/##/####</p>
        </div>

      </div>
      
    </div>
  )
}

export default Home