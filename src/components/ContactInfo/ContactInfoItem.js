const ContactInfoItem = ({ link, target, text, children }) => {
  if (link) {
    return (
      <span className="space-x-2 w-full bg-zinc-800 text-center">
        <a href={link} target={target} className="hover:bg-sky-900 transition-colors p-2 block" rel="noreferrer">
          {children}
        </a>
      </span>
    );
  } else {
    return (
      <span className="flex items-center justify-center space-x-2 p-2 w-full bg-zinc-800">
        {children}
        <span>{text}</span>
      </span>
    );
  }
}

export default ContactInfoItem;
