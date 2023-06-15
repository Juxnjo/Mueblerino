import "./gallery.css"
import header from '/src/assets/Header.jpeg'

export const Gallery = () => {
  return (
    <div className="galeria">
        <h1 className='font-bold'>Galeria</h1>
        <div className="portafolio">
        <img className='border-none rounded-lg' src={header} alt="" />
        <img className='border-none rounded-lg' src={header} alt="" />
        <img className='border-none rounded-lg' src={header} alt="" />
        <img className='border-none rounded-lg' src={header} alt="" />
        <img className='border-none rounded-lg' src={header} alt="" />
        </div>
    </div>
  )
}
