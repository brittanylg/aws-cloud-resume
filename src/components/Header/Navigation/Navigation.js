import NavigationItem from './NavigationItem';

function Navigation() {
  return (
    <ul className="navigation p-4 space-y-2">
      <NavigationItem link="#bio" text="bio" />
      <NavigationItem link="#contact" text="contact info" />
      <NavigationItem link="#experience" text="experience" />
      <NavigationItem link="#projects" text="projects" />
      <NavigationItem link="#education" text="education" />
    </ul>
  );
}

export default Navigation;
