import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

import { ID_NAV } from "../../helpers/constants";
import "./footer.css";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">
                EGATOR
            </a>

            <ul className="permalinks">
                <li>
                    <a href={ID_NAV.start}>Home</a>
                </li>
                <li>
                    <a href={ID_NAV.about}>About</a>
                </li>
                <li>
                    <a href={ID_NAV.experience}>Expeience</a>
                </li>
                <li>
                    <a href={ID_NAV.services}>Services</a>
                </li>
                <li>
                    <a href={ID_NAV.portfolio}>Portfolio</a>
                </li>
                <li>
                    <a href={ID_NAV.testimonials}>Testimonials</a>
                </li>
                <li>
                    <a href={ID_NAV.contact}>Contact</a>
                </li>
            </ul>

            <div className="footer__socials">
                <a href="http://facebook.com">
                    <FaFacebookF />
                </a>
                <a href="http://instagram.com">
                    <FaInstagram />
                </a>
                <a href="http://twitter.com">
                    <IoLogoTwitter />
                </a>
            </div>

            <div className="footer__copyright">
                <small>&copy; EGATOR Tutorials. All rights reserved</small>
            </div>
        </footer>
    );
};

export default Footer;
