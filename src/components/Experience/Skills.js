const Skills = ({ data }) => (
  <div className="">
    {data.map((item, i) => <span key={i} className="m-1 py-1 px-2 inline-block rounded-md text-sm font-light bg-emerald-700 shadow">{item}</span>)}
  </div>
)

export default Skills;
