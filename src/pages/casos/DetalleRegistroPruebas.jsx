import React from 'react'
import TablaPruebas from '../../componentes/Tablas/TablaPruebasDev';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Select } from '@mui/material';


const DetalleRegistroPruebas = () => {
    return (
        <div className='bg-slate-500 p-8 rounded-xl'>
            <h1 className='text-xl text-gray-400'>Pruebas realizadas por desarrollador</h1>
            <hr className='my-8' />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1 },
                }}
                noValidate
                autoComplete="off"
            >
                <form >

                    <div className='flex-1 flex my-4'>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Título de la prueba"
                        />
                    </div>

                    <div className='flex-1 flex my-4'>
                        <TextField
                            className='w-1/3 border-x-neutral-100'
                            id="outlined-required"
                            label="Descripción de la prueba"
                        />
                        <TextField
                            className='w-1/3'
                            required
                            id="outlined-required"
                            label="Prueba diseñada por"
                        />
                        <TextField
                            className='w-1/3'
                            id="outlined-required"
                            label="Prueba ejecutada por"
                        />
                    </div>

                </form>
                <hr className='my-8' />
                <div className='w-full'>
                <TablaPruebas />                    
                </div>
            </Box>
        </div>
    );
}

export default DetalleRegistroPruebas;