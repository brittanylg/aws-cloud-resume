const Panel = ({ key, children }) => (
  <div key={key} className="max-w-7xl p-8 border-l-8 border-sky-800 bg-zinc-800 shadow-md font-light">
    {children}
  </div>
)

export default Panel;
