import { categories, projects } from "../../data";
import ProjectCard from "../ProjectCard";
import CategoryButton from "./CategoryButton";
import {  useState } from "react";


const Main = () => {
  // *** STATE ***
  const [activeBtn, setActiveBtn] = useState<string>("All")

  // *** HANDLER ***
  const onClickCategory = (name: string) => setActiveBtn(name)


  // *** RENDER ***
  const renderCategoriesBtns = categories.map((categoryName) => (
    <CategoryButton
      key={categoryName}
      name={categoryName}
      activeBtn={activeBtn === categoryName}
      onClickCategory={onClickCategory}
    />
  ));
  const renderProjects = projects.map((project, idx) => {
    if (activeBtn === "All") return <ProjectCard key={idx} project={project} />;
    if (project.category === activeBtn) return <ProjectCard key={idx} project={project} />;
    
  })
  // console.log(renderProjects);

  return (
    <>
      <main className="">
        <h3 className="text-xl md:text-3xl font-semibold text-center">
          Projects
        </h3>
        <p className="mt-3 mb-20 desc text-center short">
          Check out my work and the projects I’ve developed
        </p>

        <section className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          <section className="left flex flex-wrap  lg:flex-col  gap-3">
            {renderCategoriesBtns}
          </section>
          <section
            className="right  p-3 w-full 
        grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3
        gap-3 justify-center items-start"
          >
            {renderProjects}
          </section>
        </section>
      </main>
    </>
  );
};

export default Main;
