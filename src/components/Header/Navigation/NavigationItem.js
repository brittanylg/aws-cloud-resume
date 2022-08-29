const NavigationItem = ({ link, text }) => (
  <li>
    <a href={link} className="block hover:text-sky-900 transition-colors">
      {text}
    </a>
  </li>
)

export default NavigationItem;
