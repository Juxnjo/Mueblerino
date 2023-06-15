
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src="/src/assets/LogoBlanco.png" alt="" />
        <h1 className='font-medium'>Mueblerino</h1>
      </div>
      <div className='redes'>
        <a href="https://www.facebook.com/mueblerinosas"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/mueblerino/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
      </div>
    </div>
    
  )
}
