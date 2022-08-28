function ContactInfoSpanIcon(props) {
  return (
    <span className="flex items-center justify-center space-x-2 p-2 w-full bg-zinc-800">
      {props.faIcon}
      <span>{props.text}</span>
    </span>
  );
}

export default ContactInfoSpanIcon;
