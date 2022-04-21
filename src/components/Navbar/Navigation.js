import NavLinks from "./NavLinks";
import Logo from "../../Assets/logo-removebg.png";
import './Navbar.css'

const Navigation = () => {
  return (
    <nav className="flex justify-between Navigation">
      <img
        loading="lazy"
        src={Logo}
        alt="Logo"
        width={100}
        height={100}
        className="ml-9"
      />

      <NavLinks />
    </nav>
  );
};

export default Navigation;
