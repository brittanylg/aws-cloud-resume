import Panel from '../Panel/Panel'

const Experience = ({ data }) => (
  <>
    {data.map(({company, location, title, dates, duties, skills}, i) => (
      <Panel key={i}>
        <h3 className="text-3xl font-medium">{title}</h3>
        <p className="pb-2 text-xl">at <span className="font-medium">{company}</span>, {location}</p>
        <p className="text-sm text-zinc-300">{dates}</p>
        <ul className="list-disc pl-8 py-4">
          {duties.map((item, i) => <li key={i} className="text-lg">{item}</li>)}
        </ul>
        {skills.map((item, i) => <span key={i} className="m-1 py-1 px-2 inline-block rounded-md text-sm bg-sky-800 shadow">{item}</span>)}
      </Panel>
    ))}
  </>
)

export default Experience;
