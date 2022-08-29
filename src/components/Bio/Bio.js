const Bio = ({ data }) => (
  <section id="bio" className="px-4 py-6">
    <h1 className="font-black text-7xl">{data.name}</h1>
    <h2 className="font-light text-3xl">{data.title}</h2>

    <p className="font-light mt-8">{data.intro}</p>
  </section>
)

export default Bio;
