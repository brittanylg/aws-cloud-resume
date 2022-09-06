import { useState } from 'react';
import Avatar from './Avatar/Avatar';
import NavigationItem from './Navigation/NavigationItem';

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <header className="fixed right-0 bg-emerald-600 p-4 md:col-span-1 md:h-screen md:relative md:w-auto md:p-4">
      <nav className="flex flex-col items-end justify-end md:h-full md:items-center md:justify-center">
        <Avatar />
        <button className={opened ? "w-8 h-8 space-y-2 md:hidden" : "w-8 h-8 space-y-2 md:hidden"} onClick={() => setOpened((prev) => !prev)}>
          <span className={opened ? "block h-0.5 bg-white ease-in-out duration-150 rotate-45 relative top-2.5 transition-all" : "block h-0.5 bg-white ease-in-out relative top-0 transition-all"}></span>
          <span className={opened ? "block h-0.5 bg-white ease-in-out duration-150 opacity-0 rotate-45 transition-all" : "block h-0.5 bg-white ease-in-out transition-all"}></span>
          <span className={opened ? "block h-0.5 bg-white ease-in-out duration-150 -rotate-45 relative -top-2.5 transition-all" : "block h-0.5 bg-white ease-in-out relative top-0 transition-all"}></span>
        </button>
        <div className={opened ? "w-full pt-4" : "hidden md:block"}>
          <ul className="text-2xl font-light space-y-2 text-right md:text-center md:p-4 md:space-y-4">
            <NavigationItem link="#bio" text="Bio" />
            <NavigationItem link="#experience" text="Experience" />
            <NavigationItem link="#projects" text="Projects" />
            <NavigationItem link="#education" text="Education" />
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header;
