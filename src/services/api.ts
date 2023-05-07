import axios from "axios";

export const api = axios.create({
  baseURL: "https://json-server-group6.onrender.com",
  timeout: 8000,
});
