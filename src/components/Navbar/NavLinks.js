import './Navbar.css';
import { HashLink as Link } from 'react-router-hash-link'

const NavLinks = () => {
    return ( 
        <ul className="flex gap-16 text-xl mt-8 List-style">
        <li className="List-style-item" data-aos="fade-down" data-aos-duration='900'>
          <Link smooth to='#about' className="anchor hover:text-[#4AD575] ease-in">
            About
          </Link>
        </li>
        <li className="List-style-item" data-aos="fade-down" data-aos-duration='1200'>
          <Link smooth to='#menu' className="anchor hover:text-[#4AD575] ease-in">
            Menu
          </Link>
        </li>
        <li className="List-style-item" data-aos="fade-down" data-aos-duration='1500'>
          <Link smooth to='#offer' className="anchor hover:text-[#4AD575] ease-in">
            Offer
          </Link>
        </li>
        <li className="List-style-item" data-aos="fade-down" data-aos-duration='1800'>
          <Link smooth to='#reviews' className="anchor hover:text-[#4AD575] ease-in">
            Reviews
          </Link>
        </li>
      </ul>
     );
}
 
export default NavLinks;