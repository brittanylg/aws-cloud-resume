import Avatar from '../Avatar/Avatar';
import Navigation from './Navigation/Navigation';

function Header() {
  return (
    <header className="header h-screen bg-emerald-700 col-span-1 flex flex-col justify-center p-4">
      <Avatar />
      <Navigation />
    </header>
  );
}

export default Header;
