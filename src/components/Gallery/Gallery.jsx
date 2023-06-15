import "./gallery.css"

export const Gallery = () => {
  return (
    <div className="galeria">
        <h1 className='font-bold'>Galeria</h1>
        <div className="portafolio">
        <img className='border-none rounded-lg' src="/src/assets/Header.jpeg" alt="" />
        <img className='border-none rounded-lg' src="/src/assets/Header.jpeg" alt="" />
        <img className='border-none rounded-lg' src="/src/assets/Header.jpeg" alt="" />
        <img className='border-none rounded-lg' src="/src/assets/Header.jpeg" alt="" />
        <img className='border-none rounded-lg' src="/src/assets/Header.jpeg" alt="" />
        </div>
    </div>
  )
}
