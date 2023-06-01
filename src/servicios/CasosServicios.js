import http from "../../src/httpd-common";

const getAll = () => {
    return http.get("/tarjetas");
};

const CasosServicios = {
    getAll
};

export default CasosServicios;