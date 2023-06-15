import './map.css'

export const Map = () => {
  return (
    <div className='contenedor'>
        <iframe className='border-none rounded-lg'
        title="Google Maps"
        width="100%"
        height="200px"
        style={{ border: 0 }}
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.699717663435!2d-75.61984032323983!3d6.170946627156261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46822bb7bc0f2f%3A0x6b2702f3facfa4b6!2sItag%C3%BCi%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1686801741536!5m2!1ses!2sco`}
        allowFullScreen=""/>
        <h1 className='font-semibold'>Ubicacion</h1>
        <p>Itagüí, Antioquia</p>
    </div>
  )
}
