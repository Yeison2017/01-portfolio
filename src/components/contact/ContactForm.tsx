import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { EMAILJS } from "../../helpers/constants";

type formEvent = React.FormEvent<HTMLFormElement>;

const ContactForm = () => {
    const form: any = useRef(null);

    const sendEmail = async (e: formEvent) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(
                EMAILJS.SERVICE_ID,
                EMAILJS.TEMPLATE_ID,
                form?.current,
                EMAILJS.PUBLIC_KEY
            );

            (e.target as HTMLFormElement).reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form ref={form} onSubmit={(e) => sendEmail(e)}>
            <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
            />
            <textarea
                name="message"
                rows={7}
                placeholder="Your Message"
                required
            ></textarea>
            <button type="submit" className="btn btn-primary">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
