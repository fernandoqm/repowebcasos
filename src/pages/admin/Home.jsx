import React, { useState, useEffect } from 'react'
import Card from "react-bootstrap/Card";
import { RiTicketLine, RiMore2Fill } from "react-icons/ri";
import axios from "axios";


const Home = () => {

  const [conteo, setConteo] = useState([]);
  const [error, setError] = useState(null);
  const endpoint = 'http://localhost:43387/api/conteoDatos'

  useEffect(() => {
    axios.get(endpoint)
      .then((response) => {
        setConteo(response.data);
      });
  }, []);



  return (
    <>
      {conteo.map((item) => (

        <div>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8'>

            {/*Card total de casos */}
            <div className='bg-secondary-100 p-8 rounded-xl'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <RiTicketLine className='text-4xl bg-pink-500/10 text-orange-500 p-2 box-content rounded-xl' />
                </div>
              </div>

              <div>
                <h1 className='text-4xl text-white font-bold mb-3'>{item.total_casos}</h1>
              </div>
              <p>Total de casos atendidos</p>
            </div>


            {/*Card casos finalizados */}
            <div className='bg-secondary-100 p-8 rounded-xl'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <RiTicketLine className='text-4xl bg-pink-500/10 text-orange-500 p-2 box-content rounded-xl' />
                </div>
              </div>

              <div>
                <h1 className='text-4xl text-white font-bold mb-3'>{item.finalizado}</h1>
              </div>
              <p>Casos finalizados</p>
            </div>

            {/*Card casos en desarrollo */}
            <div className='bg-secondary-100 p-8 rounded-xl'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <RiTicketLine className='text-4xl bg-pink-500/10 text-orange-500 p-2 box-content rounded-xl' />
                </div>
              </div>

              <div>
                <h1 className='text-4xl text-white font-bold mb-3'>{item.en_desarrollo}</h1>
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
                <h1 className='text-4xl text-white font-bold mb-3'>{item.en_pausa}</h1>
              </div>
              <p>Casos en pausa</p>
            </div>

            {/*Card casos en testing */}
            <div className='bg-secondary-100 p-8 rounded-xl'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <RiTicketLine className='text-4xl bg-pink-500/10 text-orange-500 p-2 box-content rounded-xl' />
                </div>
              </div>

              <div>
                <h1 className='text-4xl text-white font-bold mb-3'>{item.en_testing}</h1>
              </div>
              <p>Casos en testing</p>
            </div>

            {/*Card casos rechazados */}
            <div className='bg-secondary-100 p-8 rounded-xl'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <RiTicketLine className='text-4xl bg-pink-500/10 text-orange-500 p-2 box-content rounded-xl' />
                </div>
              </div>

              <div>
                <h1 className='text-4xl text-white font-bold mb-3'>{item.rechazados}</h1>
              </div>
              <p>Casos rechazados</p>
            </div>

            {/*Card Casos anulados */}
            <div className='bg-secondary-100 p-8 rounded-xl'>
              <div className='flex items-center justify-between mb-4'>
                <div>
                  <RiTicketLine className='text-4xl bg-pink-500/10 text-orange-500 p-2 box-content rounded-xl' />
                </div>
              </div>

              <div>
                <h1 className='text-4xl text-white font-bold mb-3'>{item.anulados}</h1>
              </div>
              <p>Casos anulados</p>
            </div>


          </div>

        </div>
      ))}
    </>
  );
}

export default Home