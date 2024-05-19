import CategoryButton from "./CategoryButton";

const Main = () => {
  return (
    <>
      <main className="flex flex-col lg:flex-row gap-10 lg:gap-20">
        <section className="left border border-green-400 flex flex-wrap lg:flex-col justify-center items-center gap-3">
          <CategoryButton name="All"/>
          <CategoryButton name="HTML CSS(sass) JS"/>
          <CategoryButton name="JavaScript"/>
          <CategoryButton name="React"/>
          <CategoryButton name="Node Express"/>
        </section>
        <section className="right border border-blue-400 grow">RIGHT RIGHT RIGHT</section>
      </main>
    </>
  );
};

export default Main;
