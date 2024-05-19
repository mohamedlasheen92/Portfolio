import me from '../../assets/me.png'
import './hero.scss'

const Hero = () => {
  return (
    <>
      <section className="hero flex">
        <section className="info border border-green-400 grow text-center md:text-left">
          <img src={me} alt="me" className="w-32 border rounded-full mx-auto md:mx-0" />
          <h1 className="title text-lg sm:text-xl lg:text-2xl mb-4 mt-9 tracking-widest font-bold">Full Stack Software Engineer</h1>
          <p className="description font-semibold text-xs sm:text-sm md:text-base">
            I’m Mohamed Lasheen, Dedicated and results-driven Full Stack
            Developer with 2 years of experience in designing, implementing, and
            maintaining complex software solutions. Adept at both front-end and
            back-end development, with a passion for creating seamless user
            experiences. Proven expertise in a variety of programming languages,
            frameworks, and technologies.
          </p>
        </section>
        {/* <section className="ani border border-blue-500">Animation Part</section> */}
      </section>
    </>
  );
};

export default Hero;
