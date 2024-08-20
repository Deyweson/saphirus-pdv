import { Route, Routes } from 'react-router-dom'
import { LoadingPage } from './pages/loading-page/Loading-Page'

export function MainRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
    </Routes>
  )
}
