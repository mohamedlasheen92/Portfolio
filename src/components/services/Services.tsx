import './services.scss'

const Services = () => {

  return (
    <>
      <section id="services" className="services py-16">
        <div className="head">
          <h3 className="text-xl md:text-3xl font-semibold text-center mb-6">
            Offered Services
          </h3>
          <p className="mt-3 mb-20 text-center">
            Delivering tailored full-stack solutions to meet your business
            needs, from concept to deployment, ensuring scalability, efficiency,
            and seamless user experiences.
          </p>
        </div>

        <div className="services-list grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-12">
          <div className="service-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold mb-3">
              Full-Stack Web Development
            </h4>
            <p className="">
              Create responsive, user-friendly web applications by integrating
              front-end and back-end technologies.
            </p>
          </div>

          <div className="service-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold mb-3">
              Backend Development & API Integration
            </h4>
            <p className="">
              Specialized in building scalable backend systems with efficient
              API integrations for growth.
            </p>
          </div>

          <div className="service-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold mb-3">Frontend Development</h4>
            <p className="">
              Design and develop modern user interfaces that ensure smooth user
              experiences across devices.
            </p>
          </div>

          <div className="service-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold mb-3">
              Database Design & Management
            </h4>
            <p className="">
              Offer secure database solutions using SQL and NoSQL systems for
              efficient data management.
            </p>
          </div>

          <div className="service-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold mb-3">
              Cloud & DevOps Solutions
            </h4>
            <p className="">
              Implement cloud-based solutions with AWS/Azure and CI/CD pipelines
              for seamless scaling and deployment.
            </p>
          </div>

          <div className="service-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold mb-3">
              Custom Application Development
            </h4>
            <p className="">
              Develop custom apps tailored to specific business needs, from SaaS
              platforms to internal tools.
            </p>
          </div>

          <div className="service-card shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-semibold mb-3">
              Consultation & Optimization
            </h4>
            <p className="">
              Provide strategic advice to optimize existing systems, improve
              performance, and scale your app.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services