import Lottie from 'lottie-react';
import './contact.scss'
import mailAnimation from "../../../public/contact.json";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h3 className="text-xl md:text-3xl font-semibold text-center">Contact</h3>
        <p className="mt-3 mb-20 desc text-center">
          Don’t hesitate to reach out! Feel free to contact me with any questions or opportunities.
        </p>

        <section className="data flex items-center justify-evenly gap-10">
          <div className="send ">
            <p className="text-xl mb-4 reach">Reach me at:</p>

            <div className="flex flex-col space-y-4 text-xl contacts">
              <a
                href="mailto:mohamedlasheen637@gmail.com"
                target="_blank"
                className=" underline"
              >
                Email: mohamedlasheen637@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mohamedlasheen9/"
                target="_blank"
                className=" underline"
              >
                LinkedIn: Mohamed Lasheen
              </a>
              <a
                href="https://github.com/mohamedlasheen92"
                target="_blank"
                className=" underline"
              >
                GitHub: Mohamed Lasheen
              </a>
              <a
                href="[Your Portfolio Website Link]"
                target="_blank"
                className=" underline"
              >
                Portfolio: Visit My Portfolio
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
