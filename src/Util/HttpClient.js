import axios from "axios"
import { reactLocalStorage } from "reactjs-localstorage";
const url="https://dummyjson.com/"






const requestData=async(endPoint,type,data)=>{


    let config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data"
        }
      };

    if(type==="GET"){

        // return as
    
      return await axios.get(`${url}${endPoint}`)
        .then((res)=>{
            // console.log(res.data);
            return res.data
        })
        .catch(err=>{
            console.log("err",err);
            return err
        })
    }else if(type==="POST"){
      return await  axios.post(url+endPoint,data,config)
        .then((res)=>{
            // console.log(res);
            return res.data
        })
        .catch(err=>{
            console.log("err",err);
            return err
        })
    }

}


export default{
    requestData
}