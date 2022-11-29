import { IconType } from "react-icons/lib";

interface ContactItemProps {
    title: string;
    data: string;
    link: string;
    Icon: IconType;
}

const ContactItem = ({ title, Icon, link, data }: ContactItemProps) => {
    return (
        <article className="contact__option">
            <Icon className="contact__option-icon" />
            <h4>{title}</h4>
            <h5>{data}</h5>
            <a href={link} target="_black">
                Send a message
            </a>
        </article>
    );
};

export default ContactItem;
