import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () =>{
    useEffect(() =>{
        return setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 3000)
    },[])
    const [letterClass, setLetterClass ] = useState('text-animate')
    return(
        <div className ='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m', 'e']}
                        idx={15}
                    />
                </h1>
                <p>I am a driven individual who values teamwork and possesses strong interpersonal skills.</p>
                <p>I am dedicated to achieving specific goals efficiently and with high standards. I maintain consistency and enthusiasm while being open to learning new things.</p>
                <p>Presently, I am seeking an opportunity to join a dynamic and ambitious company where I can utilize my current skills and experience while furthering my professional growth.</p>
            </div>
        </div>
    )
}

export default About;