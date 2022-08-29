import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import ContactInfoItem from './ContactInfoItem'

const ContactInfo = ({ data }) => (
  <section id="contact-info" className="px-4 py-8 space-y-4">
    <div className="grid grid-cols-2 gap-4 justify-items-center">
      <ContactInfoItem text={data.location}>
        <FontAwesomeIcon icon={solid('location-pin')} />
      </ContactInfoItem>
      <ContactInfoItem text={data.timeZone}>
        <FontAwesomeIcon icon={solid('earth-americas')} />
      </ContactInfoItem>
    </div>
    <div className="grid grid-cols-3 gap-4 justify-items-center">
      <ContactInfoItem link="mailto:{data.email}">
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

export default ContactInfo;
