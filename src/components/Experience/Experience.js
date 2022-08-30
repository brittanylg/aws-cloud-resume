const Experience = ({ data }) => (
  <section id="experience" className="px-4 py-8 mr-20 my-8 border-l-8 border-sky-800 bg-zinc-800 space-y-8">
    <h2 className="font-semibold text-4xl">Experience</h2>
    {data.map(({company, location, title, dates, duties, skills}, i) => (
      <div key={i} className="company-panel font-light">
        <div className="py-2">
          <h3 className="text-3xl font-medium">{title}</h3>
          <p className="text-2xl">at <span className="font-medium">{company}</span>, {location}</p>
        </div>
        <p className="text-sm text-zinc-300">{dates}</p>
        <ul className="list-disc pl-8 py-4">
          {duties.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        {skills.map((item, i) => <span key={i} className="m-1 py-1 px-2 inline-block rounded-md text-sm bg-sky-800 shadow">{item}</span>)}
      </div>
    ))}
  </section>
)

export default Experience;
