import data from '../data'
import Header from './Header/Header';
import Bio from './Bio/Bio';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';
import Education from './Education/Education';

const App = () => (
  <div className="bg-zinc-900 text-white grid grid-cols-4">
    <Header />
    <main className="h-screen overflow-auto scroll-smooth col-span-3 divide-y-2 divide-zinc-800">
      <Bio data={data.bio} />
      <Experience data={data.experience} />
      <Projects data={data.projects} />
      <Education data={data.education} />
    </main>
  </div>
);

export default App;
