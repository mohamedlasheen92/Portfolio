import Lottie from 'lottie-react';
import me from '../../assets/me.png'
import './hero.scss'
import devAnimation from '../../../public/dev.json'
import { Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <section id='home' className="hero flex items-start space-x-20">
        <section className="info  grow text-center md:text-left">
          <img
            src={me}
            alt="me"
            className="w-32 border rounded-full mx-auto md:mx-0"
          />
          <h1 className="title text-lg sm:text-xl lg:text-2xl mb-4 mt-9  font-bold">
            Mohamed Lasheen - Full Stack Software Engineer
          </h1>
          <p className="description font-semibold text-xs sm:text-sm md:text-base">
            I'm a passionate Full Stack Software Engineer with a knack for
            creating efficient, scalable, and user-friendly software solutions.
            With a deep understanding of both frontend and backend technologies,
            I love to turn complex challenges into simple, elegant code. I aim
            to deliver powerful, seamless, and modern applications that meet
            client goals and exceed user expectations.
          </p>
          <div className="links flex mt-10 space-x-5">
            <a href="https://github.com/mohamedlasheen92" target="_blank" className='linkHover'>
              <Github size={30} />
            </a>
            <a href="https://www.linkedin.com/in/mohamedlasheen9/" target="_blank" className='linkHover'>
              <Linkedin size={ 30} />
            </a>
          </div>
        </section>
        <section className="ani hidden lg:block">
          <Lottie animationData={devAnimation} style={{ width: 380 }} />
        </section>
      </section>
    </>
  );
};

export default Hero;
