import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { FiFolder } from "react-icons/fi";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { IconType } from "react-icons";
import { ID_NAV } from "../../helpers/constants";

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt={"About Image"} />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <CardAbout
                            title="Experience"
                            description="3+ Years Working"
                            Icon={FaAward}
                        />
                        <CardAbout
                            title="Clients"
                            description="200+ Worlwide"
                            Icon={FiUsers}
                        />
                        <CardAbout
                            title="Projects"
                            description="80+ Completed"
                            Icon={FiFolder}
                        />
                    </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta corrupti delectus dignissimos nemo quis deleniti
                        numquam quas nam omnis mollitia minima, corporis, rerum
                        consequuntur recusandae similique possimus maiores neque
                        totam!
                    </p>

                    <a href={ID_NAV.contact} className="btn btn-primary">
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;

interface ICardAbout {
    title: string;
    description: string;
    Icon: IconType;
}

const CardAbout = ({ title, description, Icon }: ICardAbout) => {
    return (
        <article className="about__card">
            <Icon className="about__icon" />
            <h5>{title}</h5>
            <small>{description}</small>
        </article>
    );
};
