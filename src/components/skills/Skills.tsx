import './skills.scss'

const Skills = () => {

  return (
    <>
      <section id="skills" className="skills py-10 ">
        <div className="head">
          <h3 className="text-xl md:text-3xl font-semibold text-center">
            Skills
          </h3>
          <p className="mt-3 mb-20 text-center">
            A diverse set of skills ranging from front-end to back-end
            technologies, providing full-stack solutions.
          </p>
        </div>

        <div className="categories grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-12 items-start">
          {/* Frontend Development */}
          <div className="category  shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h4 className="text-lg md:text-2xl font-semibold mb-3">
              Frontend Development
            </h4>
            <ul className="space-y-2">
              <li className="">HTML, CSS, SASS</li>
              <li className="">JavaScript, TypeScript, ReactJS</li>
              <li className="">Bootstrap, TailwindCSS, JQuery</li>
            </ul>
          </div>

          {/* Backend Development */}
          <div className="category shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow ">
            <h4 className="text-lg md:text-2xl font-semibold mb-3">
              Backend Development
            </h4>
            <ul className="space-y-2">
              <li className="">NodeJS, ExpressJS</li>
              <li className="">C#, ASP.NET Core MVC, ASP.NET Core API</li>
              <li className="">ADO.NET, LINQ, Entity Framework</li>
            </ul>
          </div>

          {/* Database Management */}
          <div className="category shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow ">
            <h4 className="text-lg md:text-2xl font-semibold mb-3">
              Database Management
            </h4>
            <ul className="space-y-2">
              <li className="">SQL, MongoDB</li>
            </ul>
          </div>

          {/* Programming & Problem Solving */}
          <div className="category shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow ">
            <h4 className="text-lg md:text-2xl font-semibold mb-3">
              Programming & Problem Solving
            </h4>
            <ul className="space-y-2">
              <li className="">C/C++, Algorithms, Data Structures</li>
              <li className="">Solid Principles, Design Patterns, OOP</li>
            </ul>
          </div>

          {/* Version Control */}
          <div className="category shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow ">
            <h4 className="text-lg md:text-2xl font-semibold mb-3">
              Version Control
            </h4>
            <ul className="space-y-2">
              <li className="">Git & GitHub</li>
            </ul>
          </div>

          {/*  */}
          {/* <div className="category md:w-1/3"></div> */}
        </div>
      </section>
    </>
  );
}

export default Skills