import NavigationItem from './NavigationItem';

const Navigation = () => (
  <ul className="p-4 space-y-2">
    <NavigationItem link="#bio" text="bio" />
    <NavigationItem link="#contact-info" text="contact info" />
    <NavigationItem link="#experience" text="experience" />
    <NavigationItem link="#projects" text="projects" />
    <NavigationItem link="#education" text="education" />
  </ul>
)

export default Navigation;
