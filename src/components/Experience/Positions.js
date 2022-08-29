import JobDescription from './JobDescription'
import Skills from './Skills'

const Positions = ({ data }) => (
  <>
    {data.map(({title, dates, duties, skills}, i) => (
      <div key={i} className="p-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <span className="text-sm font-light">{dates}</span>
        <JobDescription data={duties} />
        <Skills data={skills} />
      </div>
    ))}
  </>
)

export default Positions;
