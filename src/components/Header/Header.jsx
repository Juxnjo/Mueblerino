import './header.css'
import header from '/src/assets/Header.jpeg'

export const Header = () => {
  return (
    <div>
        <div className='header'>
            <div className='informacion'>
            <h1 className='font-bold'>Transforma tu hogar con estilo</h1>
            <p className='font-medium'>Nuestro diseño de interiores moderno y elegante hará que tu casa luzca como nunca antes. <br />
            ¡Hazlo realidad con Mueblerino!</p>
            <button className='border-2 rounded-lg font-medium'>¡Mejora ya!</button>
            </div>
        </div>
        <img src={header} alt="header" />
    </div>
    
  )
}
