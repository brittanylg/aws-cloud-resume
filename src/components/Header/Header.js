import Avatar from '../Avatar/Avatar';
import Navigation from './Navigation/Navigation';

const Header = ({ data }) => (
  <header className="h-screen bg-emerald-600 col-span-1 flex flex-col justify-center p-4">
    <Avatar />
    <Navigation />
  </header>
)

export default Header;
