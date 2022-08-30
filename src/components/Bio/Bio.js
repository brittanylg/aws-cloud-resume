import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import ContactInfoItem from './ContactInfoItem'

const Bio = ({ data }) => (
  <section id="bio" className="py-8 pr-20 my-8 font-light">
    <h1 className="font-black text-7xl">{data.name}</h1>
    <h2 className="text-3xl">{data.title}</h2>
    <div className="flex justify-items-center space-x-4">
      <ContactInfoItem text={data.location}>
        <FontAwesomeIcon icon={solid('location-pin')} />
      </ContactInfoItem>
      <ContactInfoItem text={data.timeZone}>
        <FontAwesomeIcon icon={solid('earth-americas')} />
      </ContactInfoItem>
    </div>

    <p className="my-8 text-xl">{data.intro}</p>

    <div className="flex items-center justify-start space-x-4">
      <ContactInfoItem link={data.email}>
        <FontAwesomeIcon icon={solid('envelope')} />
      </ContactInfoItem>
      <ContactInfoItem link={data.linkedin} target="_blank">
        <FontAwesomeIcon icon={brands('linkedin-in')} />
      </ContactInfoItem>
      <ContactInfoItem link={data.github} target="_blank">
        <FontAwesomeIcon icon={brands('github')} />
      </ContactInfoItem>
    </div>
  </section>
)

export default Bio;
