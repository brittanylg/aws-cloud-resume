import './Navigation.css';

function Navigation() {
  return (
    <ul className="navigation p-4 space-y-2">
      <li><a href="#bio">Bio</a></li>
      <li><a href="#contact">Contact Info</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#education">Education</a></li>
    </ul>
  );
}

export default Navigation;
