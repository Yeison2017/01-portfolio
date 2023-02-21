import React from "react";
import "./header.css";
import HeaderSocial from "./HeaderSocial";

import CTA from "./CTA";
import ME from "../../assets/me.png";
import { ID_NAV } from "../../helpers/constants";

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello, I'm</h5>
                <h1>Hajia Bintu</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href={ID_NAV.contact} className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    );
};

export default Header;
