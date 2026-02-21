import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
  <div className='experience__container'>
    <div className='experience__header'>
      <h3 className='experience__company'>{experience.company}</h3>
      <span className='experience__meta'>
        {experience.type}
        {experience.location && <> &middot; {experience.location}</>}
      </span>
    </div>

    <div className='experience__roles'>
      {experience.roles.map((role) => (
        <div key={uniqid()} className='experience__role'>
          <div className='experience__role-header'>
            <h4 className='experience__role-title'>
              {role.title}
              {role.subtitle && (
                <span className='experience__role-subtitle'>
                  {' '}
                  ({role.subtitle})
                </span>
              )}
            </h4>
            {role.time && (
              <span className='experience__role-time'>{role.time}</span>
            )}
          </div>

          {role.description && (
            <p className='experience__role-description'>{role.description}</p>
          )}

          {role.projects &&
            role.projects.map((project) => (
              <div key={uniqid()} className='experience__project'>
                <h5 className='experience__project-name'>{project.name}</h5>
                <p className='experience__project-description'>
                  {project.description}
                </p>
              </div>
            ))}

          {role.skills && role.skills.length > 0 && (
            <div className='experience__skills'>
              {role.skills.map((skill) => (
                <span key={uniqid()} className='experience__skill'>
                  {skill}
                </span>
              ))}
            </div>
          )}

          {role.links && role.links.length > 0 && (
            <div className='experience__links'>
              {role.links.map((link) => (
                <a
                  key={uniqid()}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='experience__link link'
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
)

export default ExperienceContainer
