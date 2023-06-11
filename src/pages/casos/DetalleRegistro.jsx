import React from 'react'
import { RiSave3Fill } from "react-icons/ri";
import { Checkbox, Tabs, Tab } from '@mui/material';

export const DetalleRegistro = () => {
    return (
        <div className='bg-slate-500 p-8 rounded-xl'>
            <h1 className='text-xl text-gray-100'>Registro de casos</h1>
            <hr className='my-8 border-gray-100 w=1/2' />
            <form>
                <div className='flex items-center'>
                    <div className='w-1/4'>
                        <p>Título del caso <span className='text-red-500'>*</span></p>
                    </div>
                    <div className='flex-1 flex items-center gap-4'>
                        <div className='w-full'>
                            <input className='w-full outline-none rounded-lg px-4' name='caso' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center mt-4'>
                    <div className='w-1/4'>
                        <p>Id tarjeta <span className='text-red-500'>*</span></p>
                    </div>
                    <div className='flex-1 flex items-center gap-4'>
                        <div className='w-full'>
                            <input className='outline-none rounded-lg' name='id_tarjeta' />
                        </div>
                    </div>

                    <div className='w-1/4'>
                        <p>Branch <span className='text-red-500'>*</span></p>
                    </div>
                    <div className='flex-1 flex items-center gap-4'>
                        <div className='w-full'>
                            <input className='outline-none rounded-lg' name='branch' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center mt-4'>
                    <div className='w-1/4'>
                        <p>Branch padre <span className='text-red-500'>*</span></p>
                    </div>
                    <div className='flex-1 flex items-center gap-4'>
                        <div className='w-full'>
                            <input className='w-full outline-none rounded-lg px-4' name='branch_padre' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center mt-4'>
                    <div className='w-1/4 '>
                        <p>Tipo de caso <span className='text-red-500'>*</span></p>
                    </div>
                    <div className='flex-1'>
                        <select className='w-full py-2 px-4 outline-none rounded-lg text-black appearance-none'>
                            <option value="Feature" selected>
                                Feature
                            </option>
                            <option value="Hotfix">Hotfix</option>
                            <option value="Bugfix">Bugfix</option>
                        </select>
                    </div>

                    <div className='w-1/4'>
                        <p>Proyectos </p>
                    </div>
                    <div className='flex-1'>
                        <select className='w-full py-2 px-4 outline-none rounded-lg text-black appearance-none'>
                            <option value="Global" selected>
                                Global
                            </option>
                            <option value="Asr">Asr</option>
                            <option value="Abr">Abr</option>
                        </select>
                    </div>
                </div>

                <div className='flex items-center mt-4'>
                    <div className='w-1/4'>
                        <p>Descripción</p>
                    </div>
                    <div className='flex-1 flex items-center gap-4'>
                        <div className='w-full'>
                            <textarea className='w-full outline-none rounded-lg px-4' name='caso' />
                        </div>
                    </div>
                </div>

                <div className='flex items-center mt-4'>
                    <div className='w-1/4'>
                        <p>Estado </p>
                    </div>
                    <div className='flex-1'>
                        <select className='py-2 px-4 outline-none rounded-lg text-black appearance-none'>
                            <option value="ed" selected>
                                En Desarrollo
                            </option>
                            <option value="ep">En pausa</option>
                            <option value="et">En testing</option>
                            <option value="an">Anulado</option>
                            <option value="re">Rechazado</option>
                        </select>
                    </div>
                </div>

                <hr className='my-1 border-white' />

                <div className='flex items-baseline'>
                    <div>
                        <span>Aprobado</span>
                        <Checkbox />
                    </div>

                    <div>
                        <span>Merge con branch padre</span>
                        <Checkbox />
                    </div>

                    <div>
                        <span>Entregado cliente</span>
                        <Checkbox />
                    </div>
                </div>

                <hr />
                <div className='flex items-center mt-4'>
                    <div className='w-1/4'>
                        <p>Notas</p>
                    </div>
                    <div className='flex-1 flex items-center gap-4'>
                        <div className='w-full'>
                            <textarea className='w-full outline-none rounded-lg px-4' name='notas' />
                        </div>
                    </div>
                </div>

            </form>
            <hr className='my-1 border-white' />
            <div className='flex justify-end'>
                <button className='bg-green-300 text-black py-2 px-4 rounded-lg hover:bg-green-500 
                                     transition-colors'>
                    <RiSave3Fill className='w-10 h-10' />
                </button>
            </div>
        </div>

    );
}

export default DetalleRegistro;