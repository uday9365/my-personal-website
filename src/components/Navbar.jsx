import React , {useState} from 'react'
import './Navbar.css'
import S_logo from '../images/S.png'

const Navbar = () => {

  const [login, setLogin] = useState(false);
  const handleButton = () => {
    setLogin(!login)
  };

  return (
    <div>
      <header>
        <nav className='header_nav'>
          <div className="header_logo">
            <img src={S_logo} alt="logo" className='logo'/>
            <h3>hopify</h3>
          </div>          

          <ul className='header_menu'>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#blog">Blogs</a>
            </li>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button onClick={handleButton} className={`header_login-btn ${login ? 'header_logedin-btn' : ''}`}>
            {login ? 'Log Out' : 'Log in'}</button>
        </nav>
      </header>
    </div>
  )
}

export default Navbar