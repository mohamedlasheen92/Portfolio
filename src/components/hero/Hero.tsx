import me from '../../assets/me.png'
import './hero.scss'

const Hero = () => {
  return (
    <>
      <section className="hero flex">
        <section className="info border border-green-400 grow">
          <img src={me} alt="me" className="w-32 border rounded-full" />
          <h1 className="title text-2xl my-3">Full Stack Software Engineer</h1>
          <p className="description">
            I’m Mohamed Lasheen, Dedicated and results-driven Full Stack
            Developer with 2 years of experience in designing, implementing, and
            maintaining complex software solutions. Adept at both front-end and
            back-end development, with a passion for creating seamless user
            experiences. Proven expertise in a variety of programming languages,
            frameworks, and technologies.
          </p>
        </section>
        <section className="ani border border-blue-500">Animation Part</section>
      </section>
    </>
  );
};

export default Hero;
