
const BASE_URL="http://localhost:4000/app/v1"

export const signUpApi=async(username:string,password:string)=>{
    console.log('hello sit')
     try{
        const res= await fetch(`${BASE_URL}/user/signup`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
            },
            body:JSON.stringify({username,password})
        })

        if(!res.ok){
            throw new Error('Something went wrong')
        }
        console.log("okey got it",res)
        return await res.json()
     }catch(e){
         throw new Error('Something went wrong')
     }
}

export const loginApi=async(username:string,password:string)=>{
 try{
    console.log('font login')
     const res=  await fetch(`${BASE_URL}/user/signin`,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify({username,password})
    })
    if(!res.ok){
        throw new Error('Something Went wrong')
    }
    console.log(res)
    return await res.json()
 }catch(e:any){
    throw new Error('Something Went wrong',e)
 }
}