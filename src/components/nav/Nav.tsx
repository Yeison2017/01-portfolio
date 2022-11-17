import React, { useState, useCallback } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/Bi";
import { RiServiceLine } from "react-icons/Ri";
import { BiMessageSquareDetail } from "react-icons/Bi";

import "./nav.css";
import { IconType } from "react-icons/lib";
import { memo } from "react";
interface Nav_a_Props {
    dirNav: string;
    IconType: IconType;
}

const Nav = () => {
    const [activeNav, setActiveNav] = useState<string>("#");

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
            <Nav_a dirNav="#" IconType={AiOutlineHome} />
            <Nav_a dirNav="#about" IconType={AiOutlineUser} />
            <Nav_a dirNav="#experience" IconType={BiBook} />
            <Nav_a dirNav="#services" IconType={RiServiceLine} />
            <Nav_a dirNav="#contact" IconType={BiMessageSquareDetail} />
        </nav>
    );
};

export default Nav;
