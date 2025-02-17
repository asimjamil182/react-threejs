import { useState } from "react";

const Footer = (props) => {
  const [color, setColor] = useState("#ffffff");
  const handleChange = (e) => {
    setColor(e.target.value);
    props.activeColor(e.target.value);
  };

  return (
    <footer className="footer bg-gray-800 text-white text-center h-[4rem] flex items-center justify-center">
      <input className="" type="color" name="color" id="color" value={color} onChange={handleChange} />
    </footer>
  );
};
export default Footer;