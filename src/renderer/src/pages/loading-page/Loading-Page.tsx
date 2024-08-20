import './loading-page.css'
import icon from '../assets/saphirus-icon.png'
import { Loading } from '../components/loading/loading'

export function LoadingPage(): JSX.Element {
  return (
    <div className="loading-page">
      <img className="loading-page-icon" src={icon} alt="" />
      <h1 className="loading-page-title">Saphirus</h1>
      <Loading />
    </div>
  )
}
