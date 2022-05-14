import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animated_letters'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Logo from './logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = " Joe Delaney".split('');
  const jobArray = "Software Engineer".split('');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Developer / Travel Enthusiast / NY Knicks Fan</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
          <Logo/>
        </div>
      </div>
      <Loader type="line-scale"/>
    </>
  )
}

export default Home
