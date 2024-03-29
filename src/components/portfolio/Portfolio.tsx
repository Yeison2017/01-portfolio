import "./portfolio.css";
import { dataPortfolio } from "../../data/portfolio.data";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {dataPortfolio.map((item) => (
                    <PortfolioItem
                        key={item.id}
                        title={item.title}
                        img={item.image}
                        github={item.github}
                        demo={item.demo}
                    />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;

interface PortfolioItemProps {
    title: string;
    img: string;
    github: string;
    demo: string;
}

const PortfolioItem = ({ title, img, github, demo }: PortfolioItemProps) => {
    return (
        <article className="portfolio__item">
            <div className="portfolio__item-image">
                <img src={img} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
                <a href={github} className="btn" target={"_blank"}>
                    Github
                </a>
                <a href={demo} className="btn btn-primary" target={"_blank"}>
                    Live Demo
                </a>
            </div>
        </article>
    );
};
