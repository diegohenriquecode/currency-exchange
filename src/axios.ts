import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-brl-exchange.actionlabs.com.br/api/1.0/open',
  params: {
    apiKey: 'RVZG0GHEV2KORLNA',
    to_symbol: 'BRL'
  },
})