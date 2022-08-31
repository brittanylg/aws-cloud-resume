import data from '../data'
import Header from './Header/Header';
import Section from './Section/Section';
import Bio from './Bio/Bio';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Education from './Education/Education';

const App = () => (
  <div className="bg-zinc-900 text-white grid grid-cols-4">
    <Header />
    <main className="h-screen overflow-auto scroll-smooth col-span-3 divide-y-2 divide-zinc-800">
      <Section id="bio">
        <Bio data={data.bio} />
      </Section>
      <Section id="experience" h2="Experience">
        <Experience data={data.experience} />
      </Section>
      <Section id="projects" h2="Projects" >
        <Projects data={data.projects} />
      </Section>
      <Section id="education" h2="Education" >
        <Education data={data.education} />
      </Section>
    </main>
  </div>
);

export default App;
