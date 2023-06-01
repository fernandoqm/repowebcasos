import React, { useState } from 'react'
//Icons
import {
  RiFileUserLine,
  RiLockUnlockFill,
  RiEyeFill,
  RiEyeOffLine
}
  from "react-icons/ri";


const login = () => {
  const [showPassword, setPassword] = useState(false);

  return (
    <div className='min-h-screen flex items-center justify-center bg-secondary-900/80'>
      <div className='bg-secondary-900 p-8 rounded-xl shadow-2xl lg:w-[450px]'>
        <h1 className='text-3xl uppercase font-bold tracking-[5px] text-white bm-8'>
          Iniciar sesión
        </h1>
        <form className='bg-secondary-900'>
          <button></button>

          <div className='relative mb-4'>
            <RiFileUserLine className='absolute top-1/2 -translate-y-1/2 left-2 text-fondo' />
            <input
              type="user"
              className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-borde'
              placeholder='Usuario'
            />
          </div>

          <div className='relative mb-4'>
            <RiLockUnlockFill className='absolute top-1/2 -translate-y-1/2 left-2 text-fondo' />
            <input
              type={showPassword ? "text" : "password"}
              className='py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-borde'
              placeholder='Contraseña'
            />
            {showPassword ? (
              <RiEyeOffLine
                onClick={() => setPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            ) : (
              <RiEyeFill
                onClick={() => setPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            )
            }

          </div>
          <diV>
            <button
              type='submit'
              className='bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg hover:rounded-full transition-all'
              to="/"
            >
              Ingresar
            </button>
          </diV>

        </form>
      </div>
    </div>
  );
};

export default login;