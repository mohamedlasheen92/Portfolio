import { categories } from "../../data";
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

  return (
    <>
      <main className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
        <section className="left border border-green-400 flex flex-wrap lg:flex-col justify-center items-center gap-3">
          {renderCategoriesBtns}
        </section>
        <section className="right border border-blue-400 grow">
          RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT
          RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT
          RIGHT RIGHT
        </section>
      </main>
    </>
  );
};

export default Main;
