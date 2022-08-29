import Positions from "./Positions";

const Company = ({ name, location, positions }) => (
  <div className="company-panel shadow-md bg-zinc-800">
    <p className="px-4 py-2 bg-sky-900 border-b-2 border-white text-3xl">
      <span className="font-semibold">{name}</span>, <span className="font-light">{location}</span>
    </p>
    <Positions data={positions} />
  </div>
)

export default Company;
