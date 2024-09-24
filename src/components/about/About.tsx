import "./about.scss";

const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="head">
          <h3 className="text-xl md:text-3xl font-semibold text-center">
            About{" "}
          </h3>
          <p className="mt-3 text-center">
            Learn more about my journey and passion for software development.
          </p>
        </div>

        <section className="flex flex-col items-center space-x-10">
          <section className="story flex flex-col md:flex-row items-center justify-evenly md:space-x-5">
            <section className="image hidden lg:block">
              {/* <img src={mainMe} alt="" className="w-60 bg-bottom  hidden lg:block mr-10 " /> */}
            </section>
            {/* <section className="left ">
            </section> */}

            <section className="right mt-20 lg:w-3/6">
              <p>
                From an early fascination with code to becoming a skilled Full
                Stack Software Engineer, my passion has always been about
                solving problems and creating value. I specialize in building
                efficient, scalable backend solutions that drive seamless
                performance, whether handling complex data or optimizing
                business processes.
              </p>
              <p>
                With experience gained from working on diverse projects, I
                ensure that every solution meets the highest standards of
                reliability and efficiency. My goal is to help clients scale
                their businesses, streamline operations, and deliver enhanced
                user experiences through clean, optimized code.
              </p>
              <p>
                <span className="font-bold">What I Bring to the Table<br/></span> I focus on delivering
                practical, results-driven solutions that align with your
                business objectives. Whether you're looking to enhance user
                satisfaction or boost system performance, my expertise in both
                frontend and backend development ensures a balanced,
                comprehensive approach. I’m committed to delivering not just
                code, but meaningful outcomes that support growth, innovation,
                and long-term success.
              </p>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
