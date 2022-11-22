import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/Bi";

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offter</h5>
            <h2>Services</h2>

            <div className="container services__container">
                <ItemService
                    title="UI/UX Design"
                    list={[
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                    ]}
                />
                <ItemService
                    title="Web Development"
                    list={[
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                    ]}
                />
                <ItemService
                    title="Content Creation"
                    list={[
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                        "Lorem ipsum dolor sit amet consectetur.",
                    ]}
                />
            </div>
        </section>
    );
};

export default Services;

interface IItemServiceProps {
    title: string;
    list: string[];
}

const ItemService = ({ title, list }: IItemServiceProps) => {
    return (
        <article className="service">
            <div className="service__head">
                <h3>{title}</h3>
            </div>

            <ul className="service__list">
                {list.map((item, index) => (
                    <li key={index}>
                        <BiCheck className="service__list-icon" />
                        <p>{item}</p>
                    </li>
                ))}
            </ul>
        </article>
    );
};
