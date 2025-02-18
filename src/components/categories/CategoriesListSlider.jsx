import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import categoriesData from "./categoriesData";

const CategoriesListSlider = () => {
  return (
    <>
    <Swiper
      className="w-full my-1"
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false,  pauseOnMouseEnter: true,  }}
      spaceBetween={20}
      loop={true} // Enables continuous looping
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {categoriesData.map((cat, index) => (
        <SwiperSlide key={index} className="w-64 h-72 flex flex-col justify-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl">
        <div className="p-10 flex flex-col justify-between items-center h-full">
            <img src={cat.img} alt={`Slide ${index + 1}`} className="object-cover w-40" />
            <h3 className="text-white">{cat.name}</h3>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
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
        `}
    </style>
    </>
  )
}

export default CategoriesListSlider