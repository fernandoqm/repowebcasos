import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Detalle from '../casos/DetalleRegistro';
import Pruebas from '../casos/DetalleRegistroPruebas';


export const RegistroCasos = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Registro" value="1" />
                        <Tab label="Pruebas dev." value="2" />
                        <Tab label="Testing" value="3" />
                        <Tab label="Bitacora" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Detalle />    
                </TabPanel>
                <TabPanel value="2">
                    <Pruebas />
                </TabPanel>
                <TabPanel value="3">Testing</TabPanel>
                <TabPanel value="4">Bitacora</TabPanel>
            </TabContext>
        </Box>
    );
}

export default RegistroCasos;