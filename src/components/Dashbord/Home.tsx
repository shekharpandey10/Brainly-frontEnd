import  { useEffect, useState } from 'react'
import { getAllDoc } from '../../api/ContentApi'
// import Button from './Button'
// import Share from '../../icons/Share'
// import Plus from '../../icons/Plus'
// import Card from './Card'
import Header from './Header'
import NewDocs from './NewDocs'
import ShareLink from './ShareLink'
import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import AllCards from './AllCards'
import { ClipLoader } from 'react-spinners'
function Home({ handleLogOut }: any) {
  console.log('home is loading')
  const [list, setList] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(false)
  const [share, setShare] = useState(false)
  const navigate = useNavigate()
  const handleShare = () => {
    setOpen(false)
    setShare((p) => !p)
  }

  const handleAdd = () => {
    setShare(false)
    setOpen((p) => !p)
  }

  const callApi = async () => {
    const result:any = await getAllDoc()
    console.log(result, 'result is')
   
    
    if (result.status === 200) {
      setList(result.res.data)
      navigate('/home')
    } else {
      setError(result.error || 'Internal server Error')
      navigate('/login')
    }
    setLoading(false)
    console.log(error)
  }
  console.log(list)
  useEffect(() => {
    const token = localStorage.getItem('jwtSecret')
    console.log('token from home ', token)
    if (!token) {
      console.log('navigate to login')
      navigate('/login')
      return
    }

    callApi()
  }, [navigate])

  if (loading) {
    return (
      <div className='h-screen w-screen flex items-center justify-center'>
        <ClipLoader color={'#123abc'} loading={loading} size={50} />
      </div>
    )
  }
  if (error) {
    return <div>Error....</div>
  }
  return (
    <div
      className={`w-full min-h-screen  flex ${
        open || share ? 'bg-[#2f4c5827]' : 'bg-[#f9fbfc]'
      } `}
    >
      <Sidebar />
      <div className=' w-full min-h-screen'>
        <Header
          handleAdd={handleAdd}
          handleShare={handleShare}
          handleLogOut={handleLogOut}
        />

        <AllCards list={list} />
        {open && <NewDocs handleAdd={handleAdd} />}
        {share && <ShareLink handleShare={handleShare} />}
      </div>
    </div>
  )
}

export default Home
