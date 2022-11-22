import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
import { IconType } from "react-icons/lib";

const Experience = () => {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frotend Development</h3>
                    <div className="experience__content">
                        <ItemExperience title="HTML" />
                        <ItemExperience title="CSS" />
                        <ItemExperience title="JavaScript" />
                        <ItemExperience title="Bootstrap" />
                        <ItemExperience title="Tailwind" />
                        <ItemExperience title="React" />
                    </div>

                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <ItemExperience title="Node JS" />
                        <ItemExperience title="MongoDB" />
                        <ItemExperience title="PHP" level="Intermediate" />
                        <ItemExperience title="MySQL" level="Basic" />
                        <ItemExperience title="Python" />
                    </div>
                </div>
                <div className="experience__backend"></div>
            </div>
        </section>
    );
};

export default Experience;

interface ItemExperienceProp {
    title: string;
    level?: string;
}

const ItemExperience = ({
    title,
    level = "Experienced",
}: ItemExperienceProp) => {
    return (
        <article className="experience__details">
            <BsPatchCheckFill />
            <h4>{title}</h4>
            <small className="text-light">{level}</small>
        </article>
    );
};
