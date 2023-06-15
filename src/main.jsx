import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Header } from './components/Header/Header.jsx'
import { AboutUs } from './components/AboutUs/AboutUs.jsx'
import './index.css'
import { OurServices } from './components/OurServices/OurServices.jsx'
import { Section } from './components/Section/Section.jsx'
import { Gallery } from './components/Gallery/Gallery.jsx'
import { Map } from './components/Map/Map.jsx'
import { Contact } from './components/Contact/Contact.jsx'
import { Footer } from './components/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <Header/>
    <AboutUs/>
    <OurServices/>
    <Section/>
    <Gallery/>
    <Map/>
    <Contact/>
    <Footer/>
    
  </React.StrictMode>,
)
