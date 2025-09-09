import { useEffect, useState } from 'react'
import {
  faSass,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    
    return () => clearTimeout(timer);
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            A seasoned software developer with over 10 years of professional experience in all phases of the software development lifecycle, including requirements analysis, development, maintenance, and implementation of web applications. I have a strong knowledge of SDLC methodologies like Agile-SCRUM and Waterfall. I am a result-oriented and self-driven individual, always keen on learning new technologies and undertaking challenging tasks to create business value.
          </p>
          <p>
            I am skillful in designing and developing applications using a wide range of web technologies, including Java, J2EE, Spring Boot, Node.js, and React.js. My expertise extends to building microservices architecture applications and creating interactive UIs using React.js concepts like one-way data flow, Virtual DOM, and JSX. I also have extensive experience with cloud platforms, particularly working with Amazon Web Services (AWS) like EC2, S3, and RDS.
          </p>
          <p>
            I possess excellent technical, analytical, and problem-solving skills with strict attention to detail. I have a proven ability to write clear, well-documented, and efficient code and can work effectively both independently and as a collaborative member of a team. My strong communication and planning skills ensure smooth project execution and successful outcomes.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About