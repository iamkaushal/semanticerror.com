import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience__container'>
    <h3>{experience.company}</h3>
    <p>
      <strong className='experience__description'>{experience.time}</strong>
    </p>

    <div>
      {experience.projects && (
        <ul className='experience__stack'>
          {experience.projects.map((project) => (
            <li key={uniqid()} className='experience__stack-item'>
              <h5> {project.name}</h5>
              <p>{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
)

export default ExperienceContainer
