import axios from "axios";

const instance = axios.create({
  baseURL: "https://covidhelp-backend.mehulvarshney.repl.co",
});
export default instance;
