import Panel from '../Panel/Panel'

const Education = ({ data }) => (
  <>
    {data.map(({name, location, dates, degree, concentration}, i) => (
      <Panel key={i}>
        <h3 className="text-3xl font-medium">{name}, <span className="font-light">{location}</span></h3>
        <div className="py-2">
          <p className="text-2xl">{degree}</p>
          <p className="italic">{concentration}</p>
        </div>
        <p className="text-sm text-zinc-300">{dates}</p>
      </Panel>
    ))}
  </>
)

export default Education;
