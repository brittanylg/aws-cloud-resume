import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import ContactInfoSpanIcon from './ContactInfoSpanIcon'
import ContactInfoSpanIconLink from './ContactInfoSpanIconLink'

function ContactInfo() {
  return (
    <div id="contact-info" className="px-4 py-8 space-y-4">
      <div className="grid grid-cols-2 gap-4 justify-items-center">
        <ContactInfoSpanIcon faIcon={<FontAwesomeIcon icon={solid('location-pin')} />} text="Maryland, USA" />
        <ContactInfoSpanIcon faIcon={<FontAwesomeIcon icon={solid('earth-americas')} />} text="Eastern Time Zone (UTC-4)" />
      </div>
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <ContactInfoSpanIconLink faIcon={<FontAwesomeIcon icon={solid('envelope')} />} link="mailto:brittanylgrant00@gmail.com"/>
        <ContactInfoSpanIconLink faIcon={<FontAwesomeIcon icon={brands('linkedin-in')} />} link="https://linkedin.com/in/brittanylg"/>
        <ContactInfoSpanIconLink faIcon={<FontAwesomeIcon icon={brands('github')} />} link="https://github.com/brittanylg"/>
      </div>
    </div>
  );
}

export default ContactInfo;
