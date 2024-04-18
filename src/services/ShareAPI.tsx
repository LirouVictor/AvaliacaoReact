import axios from "axios";
const baseurl = 'https://g183k2nx-7029.brs.devtunnels.ms'

const apiClient = axios.create({
    baseURL: baseurl,
    headers: {
    }
})

export const consultaAcaoPorCodigo = (codigoacao: string)  => {
    return apiClient.get<any>(`${baseurl}/Share/${codigoacao}`);
}

