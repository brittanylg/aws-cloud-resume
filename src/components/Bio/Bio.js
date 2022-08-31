import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands, solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import PersonMeta from './PersonMeta'

const Bio = ({ data }) => (
  <div>
    <h1 className="font-black text-7xl">{data.name}</h1>
    <div className="flex justify-items-center text-sm space-x-4">
      <PersonMeta text={data.location}>
        <FontAwesomeIcon icon={solid('location-pin')} />
      </PersonMeta>
      <PersonMeta text={data.timeZone}>
        <FontAwesomeIcon icon={solid('earth-americas')} />
      </PersonMeta>
    </div>

    <p className="my-8 text-xl">{data.intro}</p>

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
