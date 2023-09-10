import Loader from 'react-loaders';
import './index.scss'
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () =>{
    const refForm = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        return setTimeout(() =>{
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    const sendEmail = (e) =>{
        e.preventDefault()
        emailjs.sendForm(
                'service_h9af4wq',
                'template_yp2gu93',
                refForm.current,
                'SLP3RQG-tX2dAOw5s'
                )
                .then(
                    () => {
                        alert('Message successfully sent!')
                        window.location.reload(false)
                    },
                    () => {
                        alert('Operation failed. PLease try again!')
                    }
                    )
    }
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','M','e']} idx = {15} />
                    
                </h1>
                <p>
                I am dedicated to achieving specific goals efficiently and with high standards. I maintain consistency and enthusiasm while being open to learning new things.

Presently, I am seeking an opportunity to join a dynamic and ambitious company where I can utilize my current skills and experience while furthering my professional growth.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text'  name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email'  name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input type='text'  name='subject' placeholder='Subject' required/>
                            </li>
                            <li >
                                <textarea   name='message' placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button'  value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map' >
                Ernest Oganji,
                <br/>
                United Kingdom
                <br />
                221 Easter reload
                <span>epospiky@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url='http://{$}.title.openstreetmap.org/{z}/{x}/{y}.png'/>
                    <Marker position={[44.96366, 19.61045]} >
                        <Popup>Epospiky lives here. Drop by for a cup of coffee</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact;