const Section = ({ id, h2, children }) => (
  <section id={id} className="md:min-h-screen flex flex-col justify-center space-y-8 sm:px-10 px-4 py-16">
    {h2 && <h2 className="font-semibold sm:text-4xl text-3xl">{h2}</h2>}
    {children}
  </section>
)

export default Section;
