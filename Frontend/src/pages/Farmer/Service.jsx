import React from "react";
import { FaSeedling, FaLeaf, FaTractor, FaWater, FaCarrot, FaTree, FaShoppingBasket, FaHandsHelping } from "react-icons/fa";
import img from "../../assets/img_long_5.jpg";
import { BsCloudRain, BsHeart, BsShop } from "react-icons/bs";
import blog from "../../assets/img_sq_1.jpg"
import blog2 from "../../assets/img_sq_3.jpg"
import blog3 from "../../assets/img_sq_8.jpg"
import blog4 from "../../assets/img_sq_4.jpg"
import blog6 from "../../assets/img_sq_6.jpg"
import blog1 from "../../assets/img_sq_1.jpg"
import blog8 from "../../assets/img_sq_8.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const services = [
  {
    icon: <FaSeedling size={48} className="text-lime-600" />,
    title: "Planting",
    desc: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
  },
  {
    icon: <FaLeaf size={48} className="text-green-600" />,
    title: "Mulching",
    desc: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
  },
  {
    icon: <FaTractor size={48} className="text-lime-700" />,
    title: "Plowing",
    desc: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
  },
  {
    icon: <FaCarrot size={48} className="text-orange-500" />,
    title: "Mowing",
    desc: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
  },
  {
    icon: <FaTree size={48} className="text-green-700" />,
    title: "Seeding",
    desc: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
  },
  {
    icon: <FaWater size={48} className="text-blue-400" />,
    title: "Watering",
    desc: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
  },
  {
    icon: <FaShoppingBasket size={48} className="text-lime-600" />,
    title: "Fresh Vegetables",
    desc: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
  },
  {
    icon: <FaHandsHelping size={48} className="text-green-500" />,
    title: "Vegetable Selling",
    desc: "Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie",
  },
];
const services2 = [
  { title: "Planting", img: blog },
  { title: "Mulching", img: blog2 },
  { title: "Watering", img: blog3 },
  { title: "Fertilizing", img: blog4 },
  { title: "Harvesting", img: blog6 },
  { title: "Mowing", img: blog1 },
  { title: "Seeding Plants", img: blog8 },
];

const Service = () => (
  <>
  <section id="services" className="py-16 bg-gradient-to-br from-green-50 via-lime-100 to-green-100">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-2 tracking-wide">SERVICES</h2>
        <p className="text-lg text-green-700">Providing Fresh Produce Every Single Day</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition border border-lime-100"
            data-aos="fade-up"
            data-aos-delay={idx * 100}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-green-800 mb-2">{service.title}</h3>
            <p className="text-gray-700 text-center text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>

   <section id="about" className="py-16 bg-green-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="zoom-out">
            <img
              src={img}
              alt="About"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
          {/* Content */}
          <div className="w-full lg:w-2/5 lg:ml-auto" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg text-white opacity-50 mb-2">Why Choose Us</h3>
            <h2 className="text-3xl font-bold mb-4 text-white">
              More than <strong>50 year experience</strong> in agriculture industry
            </h2>
            <p className="text-white opacity-50 mb-6">
              Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi illum
              minima nostrum perspiciatis error consequatur sit nulla.
            </p>
            <div className="space-y-6 my-5">
              <div className="flex items-start">
                <BsCloudRain className="text-lime-400 text-4xl mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-lg font-semibold m-0">Plants needs rain</h4>
                  <p className="text-white opacity-50 m-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="flex items-start">
                <BsHeart className="text-lime-400 text-4xl mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-lg font-semibold m-0">Love organic foods</h4>
                  <p className="text-white opacity-50 m-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="flex items-start">
                <BsShop className="text-lime-400 text-4xl mr-4 flex-shrink-0" />
                <div>
                  <h4 className="text-white text-lg font-semibold m-0">Sell vegies</h4>
                  <p className="text-white opacity-50 m-0">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* // ...inside your FarmerDashboard return, after other sections... */}
    <section id="services-2" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-white mb-2">Services</h2>
          <p className="text-gray-300">Necessitatibus eius consequatur</p>
        </div>
        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            spaceBetween={40}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".js-custom-next",
              prevEl: ".js-custom-prev",
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 40 },
              1200: { slidesPerView: 3, spaceBetween: 40 },
            }}
            className="pb-12"
          >
            {services2.map((service, idx) => (
             <SwiperSlide key={idx}>
  <div className="relative rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
    <img
      src={service.img}
      alt={service.title}
      className="w-full h-80 object-cover"
    />
  <div className="absolute inset-0 flex flex-col items-center justify-start bg-black/30 p-6">
  <span className="uppercase text-xs text-lime-300 font-semibold tracking-wider drop-shadow mb-2">
    We do
  </span>
  <h2 className="text-2xl font-bold text-white drop-shadow">{service.title}</h2>
</div>
  </div>
</SwiperSlide>
            ))}
            {/* Navigation Buttons */}
            <button className="navigation-prev js-custom-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-lime-600 text-white rounded-full p-2 shadow hover:bg-lime-700 transition">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="navigation-next js-custom-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-lime-600 text-white rounded-full p-2 shadow hover:bg-lime-700 transition">
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </Swiper>
        </div>
      </div>
    </section>
    </>
);

export default Service;