import { redirect, useNavigate } from 'react-router-dom'

const BASE_URL = 'http://localhost:4000/app/v1'

const token = localStorage.getItem('jwtSecret')
export const getAllDoc = async () => {
  console.log(token)
  try {
    console.log('welcome')
    const data = await fetch(`${BASE_URL}/content/list`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    if (!data.ok) {
      const d = await data.json()
      console.log('error josn', d)
      const error = {
        status: data.status,
        error: d.msg,
      }
      return error
    }

    console.log(data, 'data')
    const res = await data.json()
    const result = {
      res: res,
      status: data.status,
    }
    return result
  } catch (e) {
    console.log(e, 'error')
    const err = {
      status: 500,
      msg: 'Internal Server Error',
    }
    return err
  }
}

export const shareLinkEnable = async (id: string) => {
try {
   const response= await fetch(`${BASE_URL}/content/shareLink`, {
    method: 'put',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${token}`,
      
    },
    body:JSON.stringify({docId:id})
  })

  const link=await response.json();
 
  return link.url;
} catch (error) {
  throw new Error("Failed to get Url of docs ")
}

}
