import avatar from './brittanylg.png';

function Avatar() {
  return (
    <div className="avatar p-4">
      <img src={avatar} alt="" title="" className="rounded-full shadow-md max-w-full w-32 mx-auto" />
    </div>
  );
}

export default Avatar;
