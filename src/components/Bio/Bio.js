import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import PersonMeta from './PersonMeta'

const Bio = ({ data }) => (
  <section id="bio" className="min-h-screen flex flex-col justify-center max-w-7xl px-10 py-16 font-light">
    <h1 className="font-black text-7xl">{data.name}</h1>
    <h2 className="text-3xl">{data.title}</h2>
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
      <PersonMeta link={data.email}>
        <FontAwesomeIcon icon={solid('envelope')} />
      </PersonMeta>
      <PersonMeta link={data.linkedin} target="_blank">
        <FontAwesomeIcon icon={brands('linkedin-in')} />
      </PersonMeta>
      <PersonMeta link={data.github} target="_blank">
        <FontAwesomeIcon icon={brands('github')} />
      </PersonMeta>
    </div>
  </section>
)

export default Bio;
