import Header from './Header/Header';
import Bio from './Bio/Bio';
import ContactInfo from './ContactInfo/ContactInfo';
import Experience from './Experience/Experience';
import data from '../data'

const App = () => (
  <div className="bg-zinc-900 text-white grid grid-cols-4 gap-6">
    <Header />
    <main className="h-screen overflow-auto col-span-3">
      <Bio data={data.bio} />
      <ContactInfo data={data.contactInfo} />
      <Experience data={data.experience} />
    </main>
  </div>
);

export default App;
