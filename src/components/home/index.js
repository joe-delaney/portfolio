import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../animated_letters'
import './index.scss'
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
              idx={19}
            />
          </h1>
          <h2>NEW YORK CITY, NEW YORK | (917) 670-9621 | JOSEPH.DELANEY546@GMAIL.COM</h2>
          <ul className="home-links">
            <Link to="/about" className="flat-button">
              About Me
            </Link>
            <Link to="/projects" className="flat-button">
              Projects
            </Link>
            <a href="https://docs.google.com/document/d/126-1WP5w6iesF9RNtXsMnw2kZP_920JG7zuh3_B3ndU/export?format=pdf" className="flat-button">
              Resume
            </a>
          </ul>
        </div>
      </div>
      <Loader type="line-scale"/>
    </>
  )
}

export default Home
