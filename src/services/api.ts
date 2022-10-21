import axios from "axios";

export const api = axios.create({
  // LOCAL URL
  // change it if you want to use it via node locally
  // http://localhost:3000/api

  baseURL: 'https://lamongabriel-dtmoney.netlify.app/api'
})