import "./about.scss";
import aboutMe from '../../assets/just00.png'

const About = () => {
  return (
    <>
      <section className="about">
        <h3 className="text-xl md:text-3xl font-semibold text-center">
          About{" "}
        </h3>
        <p className="mt-3 desc text-center short">
          Learn more about my journey and passion for software development.
        </p>

        <section className="flex flex-col items-center space-x-10">
          <section className="story flex flex-col md:flex-row md:space-x-5">
            <section className="left">
              <p className="mt-20 ">
                It all started when I was a kid, fascinated by the technology
                that seemed to make the world tick. The idea that I could create
                something with just a few lines of code captured my imagination,
                and from that moment on, I knew that software engineering was my
                calling.
              </p>
              <p>
                I remember my first coding experience like it was yesterday. I
                stumbled upon a basic tutorial on how to create a simple HTML
                webpage, and just like that, I was hooked. The ability to bring
                something to life with code—something that people could interact
                with—sparked a fire in me. That fire has only grown stronger as
                I've journeyed deeper into the world of full stack development.
              </p>
              <p>
                Fast forward a few years, and now I'm a Full Stack Software
                Engineer. I've been fortunate enough to work on a wide range of
                projects—from building sleek and responsive web apps to creating
                complex backend systems that handle massive amounts of data.
                Along the way, I’ve also sharpened my problem-solving skills,
                diving into algorithms and challenges on platforms like
                Codeforces, where I test myself against the best in the coding
                world.
              </p>
            </section>
            {/* <section> */}
            <img src={aboutMe} alt="" className="w-52 hidden lg:block " />
            {/* </section> */}
            <section className="right">
              <p className="md:mt-20">
                But what excites me the most isn’t just the coding. It’s the
                impact that technology can have on people's lives. Whether it's
                helping a business scale its services or creating an app that
                brings joy to users, I'm driven by the potential to make a
                difference. Every project I work on is a new opportunity to
                learn, innovate, and contribute something meaningful.
              </p>
              <p>
                Today, I’m proud to say that I’m equipped with a robust toolkit
                of skills that cover both the frontend and backend of software
                development. From designing intuitive user interfaces to
                architecting scalable cloud-based solutions, I aim to bring a
                seamless experience to the projects I work on.
              </p>
              <p>
                But my story is far from over. I’m constantly learning and
                evolving, driven by the same curiosity that started it all. I
                look forward to every new challenge and the chance to continue
                growing, one line of code at a time.
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
