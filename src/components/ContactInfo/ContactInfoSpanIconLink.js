function ContactInfoSpanIconLink(props) {
  return (
    <span className="space-x-2 w-full bg-zinc-800 text-center">
      <a href={props.link} className="hover:bg-emerald-800 transition-colors p-2 block">
        {props.faIcon}
      </a>
    </span>
  );
}

export default ContactInfoSpanIconLink;
