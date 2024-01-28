
import Heading from '../utils/Heading'
import { data } from '../data'
import SingleProjects from './SingleProjects'
import { projects } from '../data'

const Works = () => {

  return (
    <div className='bg-[#0f1a27] px-10 pb-10' id="works">

      <Heading heading="My Works" inner="works" />


      <div className="gallery grid sm:grid-cols-2  lg:grid-cols-3 gap-4">

        {
          projects?.map((project) => {

            return <SingleProjects key={project.id} {...project} />
          })
        }

      </div>

    </div >
  )
}

export default Works