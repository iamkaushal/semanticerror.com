import uniqid from 'uniqid'
import { researches } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Researches.css'

const Researches = () => {
  if (!researches.length) return null

  return (
    <section id='researches' className='section projects'>
      <h2 className='section__title'>Research Papers</h2>

      <div className='projects__grid'>
        {researches.map((research) => (
          <ProjectContainer key={uniqid()} project={research} />
        ))}
      </div>
    </section>
  )
}

export default Researches
