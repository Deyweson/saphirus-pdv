import './loading-page.css'
import icon from '../assets/saphirus-icon.png'
import { Loading } from '../components/loading/loading'

export function LoadingPage(): JSX.Element {
  const getUserCount = async (): Promise<void> => {
    const count = await window.api.haveUsers()
    console.log(count)
    // if false go to register page
    // true go to login page
  }

  getUserCount()

  return (
    <div className="loading-page">
      <img className="loading-page-icon" src={icon} alt="" />
      <h1 className="loading-page-title">Saphirus</h1>
      <Loading />
    </div>
  )
}
