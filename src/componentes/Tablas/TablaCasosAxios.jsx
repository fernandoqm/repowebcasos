import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Button } from "@mui/material";
import { RiAddCircleLine } from "react-icons/ri";
import { Navigate } from "react-router-dom"; 



const TablaCasos = () => {
    //1 - Configurar los hooks
    const [casos, setCasos] = useState([])
    const [goToReg, setGotoRegistro] = React.useState(false);

    const endpoint = 'http://localhost:43387/api/tarjetas'


    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data = response.data
            console.log(data)
            setCasos(data)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    //2 - Definir las columnas
    const columnas = [
        {
            name: "id_tarjeta",
            label: "Id ",
            options: {
                filter: true,
                customFilterListOptions: { render: v => `Name: ${v}` },
                filterOptions: {
                    names: ['a', 'b', 'c', 'Business Analyst']
                },
            }
        },
        {
            name: "caso",
            label: "Casos"
        },
        {
            name: "descripcion",
            label: "descripcion"
        },
        {
            name: "nombre",
            label: "Proyecto"
        },
        {
            name: "cliente",
            label: "Cod. cliente"
        },
        {
            name: "razon_social",
            label: "Razón social"
        },
        {
            name: "version",
            label: "Versión"
        },
        {
            name: "script",
            label: "Script"
        },
        {
            name: "desc_estado",
            label: "Estado"
        },
    ]

    const opciones = {
        filter: true,
        onFilterChange: (changedColumn, filterList) => {
            console.log(changedColumn, filterList);
        },
        sortOrder: {
            name: 'id_tarjeta',
            direction: 'desc'
        },
        textLabels: {
            body: {
                noMatch: "Sin datos que mostrar!",
            },
            toolbar: {
                search: "Buscar",
                print: "Imprimir",
                DownloadToCsv: "Exportar Csv",
            },
            pagination: {
                next: "Siguiente >",
                previous: "< Anterior",
                rowsPerPage: "Total de items por hoja",
                displayRows: "De"
            },
            viewColums: {
                title: "Mostrar columnas",
                titleArea: "Mostrar/Ocultar columnas",
            },
            filter: {
                all: "Todos",
                title: "Filtrar por",
                reset: "Quitar filtro",
            },
            downloadOptions: {
                titleArea: "Descargar excel",
                filename: 'lista_casos.csv',
                separator: ';',
                filterOptions: {
                    useDisplayedColumnsOnly: true,
                    useDisplayedRowsOnly: true,
                }
            },
        }
    };

    if(goToReg){
        return <Navigate to="/RegistroCasos"/>;
    }


    return (
        <div>
            <div className="mb-5">
                <Button 
                  variant="contained" 
                  startIcon={<RiAddCircleLine />}
                  onClick={() => {
                    setGotoRegistro(true);
                  }}
                >
                    Agregar caso nuevo
                </Button>
            </div>

            <MUIDataTable
                title={"Listado de casos atendidos"}
                data={casos}
                columns={columnas}
                options={opciones}
            />

        </div>
    );
};

export default TablaCasos;