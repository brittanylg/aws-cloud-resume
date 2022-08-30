const Experience = ({ data }) => (
  <section id="experience" className="min-h-screen flex flex-col justify-center space-y-8 px-10 py-16">
    <h2 className="font-semibold text-4xl">Experience</h2>
    {data.map(({company, location, title, dates, duties, skills}, i) => (
      <div key={i} className="company-panel max-w-7xl p-8 border-l-8 border-sky-800 bg-zinc-800 font-light">
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
