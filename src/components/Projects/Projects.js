import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Projects = ({ data }) => (
  <section id="projects" className="p-8 mr-20 my-8 space-y-8 border-l-8 border-sky-800 bg-zinc-800">
    <h2 className="font-semibold text-4xl">Projects</h2>
    {data.map(({name, description, link}, i) => (
      <div key={i} className="project-panel font-light">
        <h3 className="text-3xl font-medium">{name}</h3>
        <p className="py-2">{description}</p>
        <a href={link} target="_blank" rel="noreferrer" className="hover:text-emerald-500 transition-colors">
          Link to the project <FontAwesomeIcon icon={solid('arrow-up-right-from-square')} />
        </a>
      </div>
    ))}
  </section>
)

export default Projects;
