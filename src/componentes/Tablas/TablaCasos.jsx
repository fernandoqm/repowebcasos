import React, { useState, useEffect } from "react";
import CasosService from "../../servicios/CasosServicios";
import MuiTabla from 'mui-datatables';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RiAddCircleLine } from "react-icons/ri";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";


const TablaCasos = () => {
  const [casos, setCasos] = useState([]);
  const [currentCasos, setCurrentCasos] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

 
  const getCasos = () => {
  CasosService.getAll()
  .then((response) =>{
    const datos = response.data
    setCasos(response.data)
  })
  .catch((e) => {
    console.log(e);
  });
};

  useEffect(() => {
    getCasos();
  }, []);

  const columns = [
    {
      name:"id_tarjeta",
      label:"Id "
    },
    {
       name:"caso",
       label:"Casos"
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
      name: "estado",
      label: "Estado"
    },
]

  const CustomToolbar = ({ displayData }) => {
    return (
      <>
        <IconButton aria-label="Agregar" color="primary">
          <RiAddCircleLine />
        </IconButton>
      </>
    );
  }

const option = {
  customToolbar: CustomToolbar, 
  //rowsPerPage:[10],
  //rowsPerPageOptions: [10, 20, 50, 100],
  //responsive: "scroll",
  textLabels: {
    pagination: {
      next: "Siguiente >",
      previous: "< Anterior",
      rowsPerPage: "Total de líneas por página",
      displayRows: "De",
    },
    toolbar:{
      print: "Imprimir",
      downloadCsv: "Descargar Csv",
      search: "Buscar",
      viewColums: "columnas",
      filterTable: "Filtrar"
    },
    filter: {
      title: "Filtros",
      reset: "Quitar filtros"
    },
    viewColumns: {
      title: "Mostrar Columnas"
    },
    selectedRows:{
      text: "línea(s)",
      delete: "Borrar"
    },
    selectableRowsHeader: true,
    selectableRowsHideCheckboxes: true
  }
};

const theme = createTheme({
   palette: {type: 'dark'},
   typography: { useNextVariants: true},
});

  return (
    <>
    <ThemeProvider theme={theme}>
      <MuiTabla
        title={"Listado de casos"}
        data={casos}
        columns={columns}
        options={option}
      />
    </ThemeProvider>

    </>
  );
};

export default TablaCasos;