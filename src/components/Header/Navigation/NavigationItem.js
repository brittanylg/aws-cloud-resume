const NavigationItem = ({ link, text }) => (
  <li>
    <a href={link} className="block text-emerald-400 hover:text-white active:text-white focus:text-white font-black uppercase transition-colors">
      {text}
    </a>
  </li>
)

export default NavigationItem;
