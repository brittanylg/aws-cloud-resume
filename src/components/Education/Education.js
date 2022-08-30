const Education = ({ data }) => (
  <section id="education" className="min-h-screen flex flex-col justify-center space-y-8 px-10 py-16">
    <h2 className="font-semibold text-4xl">Education</h2>
    <div className="">
      {data.map(({name, location, dates, degree, concentration}, i) => (
        <div key={i} className="education-panel max-w-7xl p-8 mr-20 my-8 border-l-8 border-sky-800 bg-zinc-800 font-light">
          <h3 className="text-3xl font-medium">{name}, <span className="font-light">{location}</span></h3>
          <div className="py-2">
            <p className="text-2xl">{degree}</p>
            <p className="italic">{concentration}</p>
          </div>
          <p className="text-sm text-zinc-300">{dates}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Education;
