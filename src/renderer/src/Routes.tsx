import { Route, Routes } from 'react-router-dom'
import { LoadingPage } from './pages/loading-page/Loading-Page'
import { LoginPage } from './pages/login-page/login-page'
import { RegisterPage } from './pages/register-page/register-page'

export function MainRoutes(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
