import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const Projects = ({ data }) => (
  <section id="projects" className="min-h-screen flex flex-col justify-center space-y-8 px-10 py-16">
    <h2 className="font-semibold text-4xl">Projects</h2>
    {data.map(({name, description, link}, i) => (
      <div key={i} className="project-panel max-w-7xl p-8 my-8 border-l-8 border-sky-800 bg-zinc-800 font-light">
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
