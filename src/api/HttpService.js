import axios from "axios";

const httpService = axios.create({

  baseURL: "http://localhost:5050",
  headers: {
    "Content-Type": "application/json",
    
  },
});


  
  export default httpService;