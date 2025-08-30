const BASE_URL = 'http://localhost:4000/app/v1'

export const signUpApi = async (username: string, password: string) => {
  console.log('sign up......')
  try {
    const res = await fetch(`${BASE_URL}/user/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })

    if (!res.ok) {
      console.log(res, 'hooooooo...')
      const err = {
        status: res.status,
        msg: await res.json().then((res) => res.msg),
      }
      return err
    }
    const data = await res.json().then((res) => res.msg)
    const result = {
      msg: data,
      status: res.status,
    }
    console.log(data)
    return result
  } catch (e) {
    console.log(e, 'hooooooo...')
    const err = {
      status: 500,
      msg: 'Internal Server Error',
    }
    return err
    //  throw new Error('Something went wrong')
  }
}

export const loginApi = async (username: string, password: string) => {
  try {
    console.log('font login')
    const res = await fetch(`${BASE_URL}/user/signin`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
    if (!res.ok) {
      console.log(res, 'hooooooo...login')
      const err = {
        status: res.status,
        msg: await res.json().then((res) => res.msg),
      }
      console.log(err)
      return err
    }
    console.log(res)
    const data = {
      status: res.status,
      msg: await res.json().then((res) => res.msg),
    }
    console.log(data)
    return data
  } catch (e: any) {
    console.log(e, 'hooooooo...login')
    const err = {
      status: 500,
      msg: 'Internal Server Error',
    }
    return err
  }
}
