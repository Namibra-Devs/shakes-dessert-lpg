import CategoriesListSlider from "./CategoriesListSlider";
const Categories = () => {
  return (
    <section id="categories" className="pb-28 pt-14 md:pt-2 md:pb-20 bg-transparent">
      <h2 className="text-[20px] md:text-[28px] font-semibold text-center text-gray-800">
        Our Categories
      </h2>
      <p className="text-white text-center text-[14px] font-medium mt-[24px]">Explore from a few of our categories</p>
      <div className="mt-20 flex justify-center gap-8 px-2">
        <CategoriesListSlider/>
      </div>
    </section>
  );
};

export default Categories;
