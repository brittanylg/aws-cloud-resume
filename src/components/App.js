import Header from './Header/Header';
import Bio from './Bio/Bio';
import ContactInfo from './ContactInfo/ContactInfo';

function App() {
  return (
    <div className="app bg-zinc-900 text-white grid grid-cols-4 gap-6">
      <Header />
      <main className="h-screen overflow-auto col-span-3">
        <Bio />
        <ContactInfo />
      </main>
    </div>
  );
}

export default App;
