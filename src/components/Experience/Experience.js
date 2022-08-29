import Company from './Company'

const Experience = ({ data }) => (
  <section id="experience" className="px-4 py-8 space-y-8">
    <h2 className="font-light text-4xl">Experience</h2>
    {data.map(({company, location, positions}, i) => (
      <Company key={i} name={company} location={location} positions={positions} />
    ))}
  </section>
)

export default Experience;
