import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GiCrossMark } from "react-icons/gi";
import 'aos/dist/aos.css';

import NavLinks from "./NavLinks";
import Logo from "../../Assets/logo-removebg.png";
import "./Navbar.css";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const hamburger = (
    <BiMenuAltRight
      className="menu-icon"
      size={40}
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <GiCrossMark
      className="close-icon swirl-out-back"
      size={40}
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <div>
      <img
        loading="lazy"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
        className="ml-9 MobileNavigationLogo"
      />
      <nav className="MobileNavigation">
        {open ? closeIcon : hamburger}
        {open && <NavLinks className='MobileNavigationBg' />}
      </nav>
    </div>
  );
};

export default MobileNavigation;
