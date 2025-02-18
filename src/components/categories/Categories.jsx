import CategoriesListSlider from "./CategoriesListSlider";
const Categories = () => {
  return (
    <section className="py-20 bg-transparent">
      <h2 className="text-4xl font-bold text-center text-gray-800">
        Our Categories
      </h2>
      <p className="text-white text-center mt-4">Explore from a few of our categories</p>
      <div className="mt-8 flex justify-center gap-8">
       <CategoriesListSlider/>
      </div>
    </section>
  );
};

export default Categories;
