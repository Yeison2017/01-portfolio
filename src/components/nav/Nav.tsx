import React, { useState, useCallback } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/Bi";
import { RiServiceLine } from "react-icons/Ri";
import { BiMessageSquareDetail } from "react-icons/Bi";

import "./nav.css";
import { IconType } from "react-icons/lib";
import { memo } from "react";
import { ID_NAV } from "../../helpers/constants";
interface Nav_a_Props {
    dirNav: string;
    IconType: IconType;
}

const Nav = () => {
    const [activeNav, setActiveNav] = useState<string>(ID_NAV.start);

    const Nav_a = ({ dirNav, IconType }: Nav_a_Props) => {
        return (
            <a
                href={dirNav}
                onClick={() => setActiveNav(dirNav)}
                className={activeNav === dirNav ? "active" : ""}
            >
                <IconType />
            </a>
        );
    };

    return (
        <nav>
            <Nav_a dirNav={ID_NAV.start} IconType={AiOutlineHome} />
            <Nav_a dirNav={ID_NAV.about} IconType={AiOutlineUser} />
            <Nav_a dirNav={ID_NAV.experience} IconType={BiBook} />
            <Nav_a dirNav={ID_NAV.services} IconType={RiServiceLine} />
            <Nav_a dirNav={ID_NAV.contact} IconType={BiMessageSquareDetail} />
        </nav>
    );
};

export default Nav;
