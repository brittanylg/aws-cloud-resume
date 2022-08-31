const Section = ({ id, h2, children }) => (
  <section id={id} className="min-h-screen flex flex-col justify-center space-y-8 px-10 py-16">
    {h2 && <h2 className="font-semibold text-4xl">{h2}</h2>}
    {children}
  </section>
)

export default Section;
