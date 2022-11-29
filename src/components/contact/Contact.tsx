import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import ContactItem from "./ContactItem";
import "./contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <ContactItem
                        title="Email"
                        data="yesionhernandez@hotmail.com"
                        link="mailto:yeisonhernandez3004@hotmail.com"
                        Icon={MdOutlineEmail}
                    />
                    <ContactItem
                        title="Messenger"
                        data="123"
                        link="https://m.me/yeisonhernandez3004"
                        Icon={RiMessengerLine}
                    />
                    <ContactItem
                        title="WhatsApp"
                        data="+123456"
                        link="https://api.whatsapp.com/send?phone=573008068214"
                        Icon={BsWhatsapp}
                    />
                </div>
                <ContactForm />
            </div>
        </section>
    );
};

export default Contact;
