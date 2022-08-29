const JobDescription = ({ data }) => (
  <ul className="list-disc pl-8 py-4">
    {data.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
)

export default JobDescription;
