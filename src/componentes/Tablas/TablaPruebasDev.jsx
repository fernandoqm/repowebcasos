import React from 'react'
import DataTabla from "mui-datatables";

const TablaPruebasDev = () => {

    const columnas = [
        {
            name: "",
            label: "Título de la prueba",
        },
        {
            name: "",
            label: "Fecha de la prueba"
        },
        {
            name: "",
            label: "Resultados esperados"
        },
        {
            name: "",
            label: "Resultados reales"
        },
        {
            name: "",
            label: "Estado"
        },
        {
            name: "",
            label: "Notas"
        },
    ]

    return (
        <DataTabla
            title={"Listado de pruebas"}
            columns={columnas}
        />
    );
}

export default TablaPruebasDev;