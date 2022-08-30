const Education = ({ data }) => (
  <section id="education" className="p-8 mr-20 my-8 space-y-8 border-l-8 border-sky-800 bg-zinc-800">
    <h2 className="font-semibold text-4xl">Education</h2>
    {data.map(({name, location, dates, degree, concentration}, i) => (
      <div key={i} className="education-panel font-light">
        <h3 className="text-3xl font-medium">{name}, <span className="font-light">{location}</span></h3>
        <div className="py-2">
          <p className="text-2xl">{degree}</p>
          <p className="italic">{concentration}</p>
        </div>
        <p className="text-sm text-zinc-300">{dates}</p>
      </div>
    ))}
  </section>
)

export default Education;
