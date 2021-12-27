import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessKing } from '@fortawesome/free-solid-svg-icons'
import {
  faStrava,
  faKaggle,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons'

import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank' rel='noopener noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social.stackoverflow && (
          <a
            href={social.stackoverflow}
            aria-label='linkedin'
            className='link link--icon'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FontAwesomeIcon icon={faStackOverflow} size='lg' />
          </a>
        )}
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedInIcon />
              </a>
            )}
            {social.kaggle && (
              <a
                href={social.kaggle}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faKaggle} size='lg' />
              </a>
            )}
            {social.instagram && (
              <a
                href={social.instagram}
                aria-label='instagram'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <InstagramIcon />
              </a>
            )}
            {social.strava && (
              <a
                href={social.strava}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faStrava} size='lg' />
              </a>
            )}
            {social.chess && (
              <a
                href={social.chess}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faChessKing} size='lg' />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
