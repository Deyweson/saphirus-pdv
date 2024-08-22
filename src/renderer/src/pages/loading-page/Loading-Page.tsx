import './loading-page.css'
import icon from '../assets/saphirus-icon.png'
import { Loading } from '../components/loading/loading'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function LoadingPage(): JSX.Element {
  const navigate = useNavigate()

  const HaveUsers = (): Promise<boolean> => {
    const haveUsers = window.api.haveUsers()
    return haveUsers
  }

  useEffect(() => {
    try {
      const checkUsers = async (): Promise<void> => {
        const haveUsers = await HaveUsers()
        if (haveUsers) {
          navigate('/login')
        } else {
          navigate('/register')
        }
      }
      checkUsers()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className="loading-page">
      <img className="loading-page-icon" src={icon} alt="" />
      <h1 className="loading-page-title">Saphirus</h1>
      <Loading />
    </div>
  )
}
