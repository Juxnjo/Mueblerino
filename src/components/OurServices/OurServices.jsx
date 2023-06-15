import './ourservices.css'

export const OurServices = () => {
  return (
    <div>
        <div className="servicios">
            <h1 className='font-bold'>Servicios</h1>
            <div className='servicio'>
              <img className='border-none rounded-lg' src="/src/assets/Header.jpeg" alt="" />
              <h1 className='font-semibold'>Decoración de interiores</h1>
              <p>Mejora la apariencia de tu hogar o negocio con nuestro servicio de decoración de interiores diseñado a medida.</p>
              <button className='border-2 rounded-lg font-medium'>Info</button>
            </div>
            <div className='servicio'>
              <img className='border-none rounded-lg' src="/src/assets/Header.jpeg" alt="" />
              <h1 className='font-semibold'>Diseño de espacios</h1>
              <p>Transforma tus espacios en áreas impresionantes y prácticas con nuestro servicio de diseño de espacios personalizado.</p>
              <button className='border-2 rounded-lg font-medium'>Info</button>
            </div>
            <div className='servicio'>
              <img className='border-none rounded-lg' src="/src/assets/Header.jpeg" alt="" />
              <h1 className='font-semibold'>Asesoramiento en diseño</h1>
              <p>Te ayudamos a tomar las mejores decisiones en cuanto al diseño de tu hogar o negocio, ofreciendo una asesoría especializada y personalizada.</p>
              <button className='border-2 rounded-lg font-medium'>Info</button>
            </div>
        </div>
    </div>
  )
}
