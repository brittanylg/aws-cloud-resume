import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Panel from '../Panel/Panel'

const Projects = ({ data }) => (
  <>
    {data.map(({name, description, techStack, github, link}, i) => (
      <Panel key={i}>
        <h3 className="text-3xl font-medium">{name}</h3>
        <div className="flex items-center space-x-4 mt-2 text-xl">
          <a href={github} target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
            <FontAwesomeIcon icon={brands('github')} />
          </a>
          <a href={link} target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
            <FontAwesomeIcon icon={solid('link')} />
          </a>
        </div>
        <p className="py-4 text-lg">{description}</p>
        {techStack.map((item, i) => <span key={i} className="m-1 py-1 px-2 inline-block rounded-md text-sm bg-sky-800 shadow">{item}</span>)}
      </Panel>
    ))}
  </>
)

export default Projects;
