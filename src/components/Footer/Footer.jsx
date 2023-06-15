import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <div>
        <footer>
            <h1>&copy; Mueblerino</h1>
            
            <div className='rrss'>
                <a href="https://www.facebook.com/mueblerinosas"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://www.instagram.com/mueblerino/"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href=""><FontAwesomeIcon icon={faWhatsapp} /></a>
            </div>
        </footer>
        <div className='madeby'>
            <a href="https://github.com/Juxnjo"><p>Made by: Juxnjo.dev 🍁</p></a>
        </div>
    </div>
  )
}
