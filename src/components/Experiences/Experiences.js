import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experiences.css'

const Experiences = () => {
  if (!experiences.length) return null

  return (
    <section id='experiences' className='section '>
      <h2 className='section__title'>Professional Experience</h2>

      <div className='projects experience__section'>
        {experiences.map((experience) => (
          <ExperienceContainer key={uniqid()} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
