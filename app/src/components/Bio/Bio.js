import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import PersonMeta from './PersonMeta'

const Bio = ({ data }) => (
  <div className="max-w-7xl">
    <h1 className="font-black md:text-7xl text-4xl">{data.name}</h1>
    <div className="sm:flex justify-items-center text-sm sm:space-x-4">
      <PersonMeta text={data.location}>
        <FontAwesomeIcon icon={solid('location-pin')} />
      </PersonMeta>
      <PersonMeta text={data.timeZone}>
        <FontAwesomeIcon icon={solid('earth-americas')} />
      </PersonMeta>
    </div>

    <p className="my-8 sm:text-xl">{data.intro}</p>

    <div className="flex items-center justify-start space-x-4">
      <PersonMeta link={data.linkedin} target="_blank">
        <FontAwesomeIcon icon={brands('linkedin-in')} />
      </PersonMeta>
      <PersonMeta link={data.github} target="_blank">
        <FontAwesomeIcon icon={brands('github')} />
      </PersonMeta>
    </div>
  </div>
)

export default Bio;
