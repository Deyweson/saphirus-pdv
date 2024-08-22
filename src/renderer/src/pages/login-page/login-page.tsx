import './login-page.css'
import logo from '../assets/saphirus-icon.png'

export function LoginPage(): JSX.Element {
  return (
    <div className="login-page">
      <div className="login-page-logo">
        <img src={logo} alt="" />
      </div>
      <div className="login-page-input">
        <form action="">
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
        </form>
        <button className="login-page-enter-btn">ENTRAR</button>
        <button className="login-page-exit-btn">SAIR</button>
      </div>
    </div>
  )
}
