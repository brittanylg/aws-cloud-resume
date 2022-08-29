function ContactInfoSpanIconLink(props) {
  return (
    <span className="space-x-2 w-full bg-zinc-800 text-center">
      <a href={props.link} className="hover:bg-sky-900 transition-colors p-2 block">
        {props.faIcon}
      </a>
    </span>
  );
}

export default ContactInfoSpanIconLink;
