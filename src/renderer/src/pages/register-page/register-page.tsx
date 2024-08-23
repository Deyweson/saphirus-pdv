import './register-page.css'
import logo from '../assets/saphirus-icon.png'

export function RegisterPage(): JSX.Element {
  return (
    <div className="register-page">
      <div className="register-page-logo">
        <img src={logo} alt="" />
      </div>
      <div className="register-page-input">
        <form action="">
          <input type="text" placeholder="Usuário" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
        </form>
        <button className="register-page-enter-btn">REGISTRAR</button>
        <button className="register-page-exit-btn">SAIR</button>
      </div>
    </div>
  )
}
