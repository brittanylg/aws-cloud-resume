function NavigationItem(props) {
  return (
    <li>
      <a href={props.link} className="block hover:text-sky-900 transition-colors">
        {props.text}
      </a>
    </li>
  );
}

export default NavigationItem;
