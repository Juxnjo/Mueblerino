import "./contact.css"

export const Contact = () => {
  return (
    <div className="contacto">
        <h1 className="font-semibold">Contactanos</h1>
        <p>¿Tienes preguntas sobre nuestros servicios de diseño de interiores? ¿Quieres programar una consulta con uno de nuestros diseñadores? ¡Completa el formulario de contacto y nos pondremos en contacto contigo lo antes posible!</p>
        <div className="container mx-auto mt-8">
            <div className="max-w-md mx-auto  shadow-md">
            <form>
                <div className="mb-4">
                <label htmlFor="name" className="block mb-2  text-white">Nombre</label>
                <input type="text" id="name" name="name" className="w-full p-2 border border-gray-300  rounded"/>
                </div>
                <div className="mb-4">
                <label htmlFor="email" className="block mb-2  text-white">Correo Electrónico</label>
                <input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded"/>
                </div>
                <div className="mb-4">
                <label htmlFor="message" className="block mb-2 text-white">Mensaje</label>
                <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
                </div>
                <button className=' static border-2 rounded-lg font-medium '>Enviar</button>
            </form>
            </div>
        </div>
    </div>
  )
}
