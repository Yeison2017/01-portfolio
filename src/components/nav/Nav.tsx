import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/Bi";
import { RiServiceLine } from "react-icons/Ri";
import { BiMessageSquareDetail } from "react-icons/Bi";

import "./nav.css";

const Nav = () => {
    return (
        <nav>
            <a href="#">
                <AiOutlineHome />
            </a>
            <a href="#about">
                <AiOutlineUser />
            </a>
            <a href="#experience">
                <BiBook />
            </a>
            <a href="#services">
                <RiServiceLine />
            </a>
            <a href="#contact">
                <BiMessageSquareDetail />
            </a>
        </nav>
    );
};

export default Nav;
