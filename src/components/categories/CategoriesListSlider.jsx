import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import categoriesData from "./categoriesData";

const CategoriesListSlider = () => {
  return (
    <div className="relative w-full">
      <Swiper
        className="w-full pb-10"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ el: ".custom-pagination", clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        spaceBetween={20}
        loop={true}
        speed={800}
        effect="slide"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {categoriesData.map((cat, index) => (
          <SwiperSlide
            key={index}
            className="w-64 h-96 flex flex-col justify-between items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4"
          >
            {/* Image Container */}
            <div className="w-full h-40 flex justify-center mb-20 mt-16">
              <img
                src={cat.img}
                alt={`Slide ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-white text-center font-medium flex-grow">{cat.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination flex justify-center gap-2 mt-4"></div>

      {/* Custom Styles */}
      <style>
        {`
        .swiper-button-next, .swiper-button-prev {
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
        }
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 15px;
          color: black;
        }
        .custom-pagination .swiper-pagination-bullet {
          width: 20px;
          height: 4px;
          background-color: white;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: white;
          width: 35px;
        }
        `}
      </style>
    </div>
  );
};

export default CategoriesListSlider;
