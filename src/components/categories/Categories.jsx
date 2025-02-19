import CategoriesListSlider from "./CategoriesListSlider";
const Categories = () => {
  return (
    <section className="pb-28 pt-36 md:pt-20 md:pb-20 bg-transparent">
      <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-800">
        Our Categories
      </h2>
      <p className="text-white text-center font-medium mt-4">Explore from a few of our categories</p>
      <div className="mt-14 flex justify-center gap-8">
        <CategoriesListSlider/>
      </div>
    </section>
  );
};

export default Categories;
