import React from 'react'
import { RiNotification3Fill, RiArrowDownSLine } from "react-icons/ri";
import imgUsua from "../assets/imagenes/lg.jpg";
import { Menu, Transition } from '@headlessui/react'


const Header = () => {
  return (
    <header className='h-[7vh] md:h-[10vh] border-b border-secondary-100 bg-fondo p-8 flex items-center justify-end'>

        <button className='relative'>
          <RiNotification3Fill />
          <span className='absolute -top-2.5 -right-2 bg-borde py-0.5 px-[5px] boc-content text-black rounded-full text-[8px] font-bold'>
            2
          </span>
        </button>
    </header>
  );
}

export default Header;