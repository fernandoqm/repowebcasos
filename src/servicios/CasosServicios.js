import http from "../../src/httpd-common";

const getAll = () => {
    return http.get("/tarjetas");
};

const CasosServicios = {
    getAll
};

const getConteo = () => {
    return http.get("/conteoDatos");
};

export default CasosServicios;