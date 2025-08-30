import { redirect, useNavigate } from "react-router-dom"

const BASE_URL = 'http://localhost:4000/app/v1'


export const getAllDoc=async()=>{
       const token=  localStorage.getItem('jwtSecret')
       console.log(token)
       try{
              console.log('welcome')
       const data= await fetch(`${BASE_URL}/content/list`,{
              method:"GET",
              headers:{
                       "Content-Type": "application/json",
                     "Authorization":`Bearer ${token}`,
              }
       })
       if(!data.ok){
              const d=await data.json()
              console.log('error josn',d)
              const error={
                     status:data.status,
                     data:d.msg
              }
            return error
       }
       
       console.log(data,'data')
       const res=await data.json()
       console.log(res,'res')
       return res
       }catch(e){
              console.log(e,'error')
       }
}