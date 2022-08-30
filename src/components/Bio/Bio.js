import ContactInfo from '../ContactInfo/ContactInfo';

const Bio = ({ data }) => (
  <section id="bio" className="py-8 pr-20 my-8">
    <h1 className="font-black text-7xl">{data.name}</h1>
    <h2 className="font-light text-3xl">{data.title}</h2>

    <p className="font-light my-8">{data.intro}</p>

    <ContactInfo data={data.contactInfo} />
  </section>
)

export default Bio;
