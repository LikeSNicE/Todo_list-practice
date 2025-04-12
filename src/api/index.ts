// const base_url:string = "https://20a93d733216cc02.mokky.dev";
// export { base_url };

import axios from "axios";
import { config } from "./config";

const api = axios.create({
  baseURL: config.base_url
})

export default api;


