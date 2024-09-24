import Lottie from 'lottie-react';
import './contact.scss'
import mailAnimation from "../../../public/contact.json";
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="head">
          <h3 className="text-xl md:text-3xl font-semibold text-center">
            Contact
          </h3>
          <p className="mt-3 mb-20 text-center">
            Don’t hesitate to reach out! Feel free to contact me with any
            questions or opportunities.
          </p>
        </div>

        <section className="data flex items-center justify-evenly gap-10">
          <div className="send ">
            <p className="text-xl mb-4 reach">Reach me at:</p>

            <div className="flex flex-col space-y-4 text-xl contacts">
              <a
                href="mailto:mohamedlasheen637@gmail.com"
                target="_blank"
                className=" underline flex gap-3 items-center"
              >
                <Mail />
                Email: mohamedlasheen637@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mohamedlasheen9/"
                target="_blank"
                className=" underline flex gap-3 items-center"
              >
                <Linkedin />
                LinkedIn: Mohamed Lasheen
              </a>
              <a
                href="https://github.com/mohamedlasheen92"
                target="_blank"
                className=" underline flex gap-3 items-center"
              >
                <Github />
                GitHub: Mohamed Lasheen
              </a>

              <a
                href="https://wa.me/201098645963" // WhatsApp link
                className="underline flex gap-3 items-center"
                target="_blank" // Open in a new tab
              >
                <Phone />
                WhatsApp: Chat with me
              </a>
              
            </div>
          </div>
          <div className="animate hidden lg:block">
            <Lottie animationData={mailAnimation} style={{ height: 400 }} />
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
