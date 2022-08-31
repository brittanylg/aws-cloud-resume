const PersonMeta = ({ link, target, text, children }) => {
  if (link) {
    return (
      <a href={link} target={target} className="w-16 h-16 p-2 flex items-center justify-center rounded-full text-4xl bg-zinc-800 hover:bg-sky-800 transition-colors" rel="noreferrer">
        {children}
      </a>
    );
  } else {
    return (
      <span className="flex items-center space-x-2 p-2">
        {children}
        <span>{text}</span>
      </span>
    );
  }
}

export default PersonMeta;
