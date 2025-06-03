import Hero from "../pages/Farmer/Hero";
import Service from "../pages/Farmer/Service";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import blog from "../assets/img_sq_1.jpg";

import testimonial1 from "../assets/testimonials-1.jpg";
import testimonial2 from "../assets/testimonials-2.jpg";
import testimonial3 from "../assets/testimonials-3.jpg";
import testimonial4 from "../assets/testimonials-4.jpg";
import Newsletter from "../pages/Farmer/Newsletter";
import Footer from "../pages/Farmer/Footer";
import RecentPost from "../pages/Farmer/RecentPost";
// Update image paths as needed (use /assets/... if in public folder)

const FarmerDashboard = () => {
  return (
    <>
      <Hero />
      <Service />
      <section id="about-3" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
            {/* Image and Play Button */}
            <div
              className="relative w-full lg:w-1/2 order-2 lg:order-1 flex justify-center"
              data-aos="zoom-out"
            >
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
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.271 4.055A.5.5 0 0 1 7 4.5v7a.5.5 0 0 1-.763.424l-6-3.5a.5.5 0 0 1 0-.848l6-3.5z" />
                  </svg>
                </span>
              </a>
            </div>
            {/* Text Content */}
            <div
              className="w-full lg:w-2/5 order-1 lg:order-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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

      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-green-800 mb-2">
              TESTIMONIALS
            </h2>
            <p className="text-gray-700">Necessitatibus eius consequatur</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: testimonial1, name: "James Smith" },
              { img: testimonial2, name: "Kate Smith" },
              { img: testimonial3, name: "Claire Anderson" },
              { img: testimonial4, name: "Dan Smith" },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center"
                data-aos="fade-up"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mb-4 object-cover"
                />
                <blockquote className="italic text-gray-700 text-center mb-4">
                  “Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Provident deleniti iusto molestias, dolore vel fugiat ab
                  placeat ea?”
                </blockquote>
                <p className="font-semibold text-green-800">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RecentPost />
      <Newsletter />
      <Footer />
    </>
  );
};

export default FarmerDashboard;
