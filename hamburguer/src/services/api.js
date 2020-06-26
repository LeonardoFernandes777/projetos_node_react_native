import axios from 'axios';

const api = axios.create({
  baseURL: "http://fastorder-com-br.umbler.net"
})

export default api;