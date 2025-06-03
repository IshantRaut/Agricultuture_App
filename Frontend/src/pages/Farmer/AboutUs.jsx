import React from 'react'
import pageBg from '../../assets/hero_3.jpg'
import blog from "../../assets/img_sq_1.jpg";
import { Link } from 'react-router-dom'
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import team1 from "../../assets/team-1.jpg"
import team2 from "../../assets/team-2.jpg"
import team3 from "../../assets/team-3.jpg"
import team4 from "../../assets/team-4.jpg"
import blog2 from "../../assets/img_sq_3.jpg"
import blog3 from "../../assets/img_sq_8.jpg"
import blog4 from "../../assets/img_sq_4.jpg"
import blog6 from "../../assets/img_sq_6.jpg"
import blog1 from "../../assets/img_sq_1.jpg"
import blog8 from "../../assets/img_sq_8.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Newsletter from './Newsletter';
import Footer from './Footer';

const teamMembers = [
  { img: team1, name: "Joshua Stefan", position: "Farmer", socials: { facebook: "#", twitter: "#", linkedin: "#" } },
  { img: team2, name: "Sheena Anderson", position: "Marketing", socials: { facebook: "#", twitter: "#", linkedin: "#" } },
  { img: team3, name: "Evan Smith", position: "Content", socials: { facebook: "#", twitter: "#", linkedin: "#" } },
  { img: team4, name: "Kaylie Jones", position: "Accountant", socials: { facebook: "#", twitter: "#", linkedin: "#" } },
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

// Page Title Section
const PageTitle = () => (
  <div
    className="page-title bg-gray-900 py-16 relative"
    style={{
      backgroundImage: `url(${pageBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    data-aos="fade"
  >
    <div className="container mx-auto px-4 relative z-10">
      <h1 className="text-4xl font-bold text-white mb-2">About</h1>
      <p className="text-gray-200 max-w-2xl mb-4">
        Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
      </p>
      <nav className="breadcrumbs text-sm">
        <ol className="flex space-x-2 text-gray-300">
          <li>
            <Link to="/" className="hover:text-lime-400 underline">
              Home
            </Link>
          </li>
          <li className="mx-2">/</li>
          <li className="current text-lime-400">About</li>
        </ol>
      </nav>
    </div>
    <div className="absolute inset-0 bg-black/40 z-0" />
  </div>
);

// About Section
const AboutSection = () => (
  <section id="about-3" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Image and Play Button */}
        <div className="relative w-full lg:w-1/2 order-2 lg:order-1 flex justify-center" data-aos="zoom-out">
          <img
            src={blog}
            alt="Plants Make Life Better"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
          <a
            href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="flex items-center justify-center w-16 h-16 bg-lime-500/80 rounded-full shadow-lg transition group-hover:scale-110 animate-pulse">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 16 16">
                <path d="M6.271 4.055A.5.5 0 0 1 7 4.5v7a.5.5 0 0 1-.763.424l-6-3.5a.5.5 0 0 1 0-.848l6-3.5z" />
              </svg>
            </span>
          </a>
        </div>
        {/* Text Content */}
        <div className="w-full lg:w-2/5 order-1 lg:order-2" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            Plants Make Life Better
          </h2>
          <p className="mb-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            necessitatibus placeat, atque qui voluptatem velit explicabo
            vitae repellendus architecto provident nisi ullam minus
            asperiores commodi! Tenetur, repellat aliquam nihil illo.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-lime-500 rounded-full"></span>
              Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-lime-500 rounded-full"></span>
              Velit explicabo vitae repellendu
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-lime-500 rounded-full"></span>
              Repellat aliquam nihil illo
            </li>
          </ul>
          <a
            href="#"
            className="inline-block bg-lime-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-lime-700 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  </section>
);

// Team Section
const TeamSection = () => (
  <section id="team" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-green-800 mb-2">Team</h2>
        <p className="text-gray-700">Necessitatibus eius consequatur</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl shadow-lg p-6 flex flex-col items-center" data-aos="fade-up">
            <div className="relative w-32 h-32 mb-4">
              <img
                src={member.img}
                alt={member.name}
                className="rounded-full object-cover w-full h-full border-4 border-lime-200"
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2 bg-white/80 px-2 py-1 rounded-full shadow">
                <a href={member.socials.facebook} className="text-lime-600 hover:text-lime-800"><FaFacebookF /></a>
                <a href={member.socials.twitter} className="text-lime-600 hover:text-lime-800"><FaXTwitter /></a>
                <a href={member.socials.linkedin} className="text-lime-600 hover:text-lime-800"><FaLinkedinIn /></a>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-green-800">{member.name}</h3>
              <span className="block text-sm text-gray-500">{member.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Services Carousel Section
const ServicesCarousel = () => (
  <section id="services-2" className="py-16 bg-gray-900">
    <div className="container mx-auto px-4">
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-white mb-2">Services</h2>
        <p className="text-gray-300">Necessitatibus eius consequatur</p>
      </div>
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
);

const AboutUs = () => {
  return (
    <div>
      <PageTitle />
      <AboutSection />
      <TeamSection />
      <ServicesCarousel />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AboutUs;