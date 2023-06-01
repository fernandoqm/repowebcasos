import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

//Layout
import LayoutAuth from "./layouts/LayoutAuth";
import LayoutAdmin from "./layouts/LayoutAdmin";
//Pages auth
import Login from "./pages/auth/Login";
import Registro from "./pages/auth/Registro";
//Pages admin
import Home from "./pages/admin/Home";
import Proyectos from "./pages/admin/Proyectos";

//Pages casos
import Casos from "./pages/casos/Casos";

//Pages Usuarios
import Usuarios from "./pages/auth/Usuarios";
import Departamentos from "./pages/auth/Departamentos";
import CambioClave from "./pages/auth/CambioClave";
//Pages config"
import Estados from "./pages/configuracion/Estados";
import TipoCasos from "./pages/configuracion/TipoCasos";



import Error404 from "./pages/Error404";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LayoutAdmin />} >
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Proyectos />} />          
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="casos" element={<Casos />} />
          <Route path="tipocasos" element={<TipoCasos />} />
          <Route path="cambioclave" element={<CambioClave />} />
          <Route path="departamentos" element={<Departamentos />} />
          <Route path="estados" element={<Estados />} />
          <Route path="usuarios" element={<Usuarios />} />
        </Route>
      
        <Route path="*" element={<Error404 />} />
      
      </Routes>

    </BrowserRouter>
  );
}

export default App
