import CV from "../../assets/cv.pdf";
import { ID_NAV } from "../../helpers/constants";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">
                Dowload CV
            </a>
            <a href={ID_NAV.contact} className="btn btn-primary">
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;
