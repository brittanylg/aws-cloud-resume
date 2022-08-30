import NavigationItem from './NavigationItem';

const Navigation = () => (
  <ul className="p-4 space-y-4 text-center text-2xl font-light">
    <NavigationItem link="#bio" text="Bio" />
    <NavigationItem link="#experience" text="Experience" />
    <NavigationItem link="#projects" text="Projects" />
    <NavigationItem link="#education" text="Education" />
  </ul>
)

export default Navigation;
