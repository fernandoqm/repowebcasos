import TablaGeneral  from 'mui-datatables';


function TablaGeneral(props){

   const columGeneral = [columnas];
   const datos = [datos];
   const opciones = [opciones];

    return(
        <>
           <TablaGeneral
               data = {datos}
               columns = {columGeneral}
               options = {opciones}
           />
        </>
    )
}