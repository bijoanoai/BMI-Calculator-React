import axios from "axios"

const axiosInstance = axios.create({

    //server api
    // baseURL: 'http://hybrid.srishticampus.in:4026/blue_collar_api/', 

    // baseURL: '', 
  
  //local api 
  
    baseURL: 'http://localhost:3003/bmi_cal_api', 
  
    headers: {
      'Content-Type': 'application/json',
    },

     url :"http://localhost:3003",
    //  url:  "http://hybrid.srishticampus.in:4026/"
    


  });
   
  export default axiosInstance